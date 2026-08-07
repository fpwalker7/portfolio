#!/usr/bin/env python3
"""Rasterize the resume PDFs into page images for mobile.

Mobile browsers (iOS Safari, Android Chrome) do not render PDFs inside an
<iframe>, so /resume/accessibility and /resume/localization showed an empty
frame on phones. The pages fall back to these images on small screens.

Re-run this whenever a PDF in public/resume/ changes:

    pip install pymupdf pillow
    python3 scripts/render-pdf-pages.py

Output: public/resume/<name>-pages/page-01.webp, page-02.webp, ...
"""

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "public" / "resume"

# Long edge of the rendered image, in pixels. 1800px covers a 3x-DPR phone and
# a 2x laptop without pushing each page much past ~100KB of WebP.
TARGET_LONG_EDGE = 1800
WEBP_QUALITY = 82


def render(pdf_path: Path) -> None:
    out_dir = PDF_DIR / f"{pdf_path.stem}-pages"
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    doc = pymupdf.open(pdf_path)
    print(f"{pdf_path.name}: {len(doc)} pages -> {out_dir.relative_to(ROOT)}")

    pages = []
    for index, page in enumerate(doc, start=1):
        long_edge = max(page.rect.width, page.rect.height)
        zoom = TARGET_LONG_EDGE / long_edge
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

        name = f"page-{index:02d}.webp"
        out_file = out_dir / name
        img.save(out_file, "WEBP", quality=WEBP_QUALITY, method=6)
        pages.append({
            "src": f"/resume/{out_dir.name}/{name}",
            "width": pix.width,
            "height": pix.height,
        })
        print(f"  {name}  {pix.width}x{pix.height}  "
              f"{out_file.stat().st_size // 1024}KB")

    # The page component reads this at build time so it can set width/height on
    # every <img> and avoid layout shift while the pages stream in.
    (out_dir / "pages.json").write_text(json.dumps(pages, indent=2) + "\n")
    doc.close()


def main() -> int:
    pdfs = sorted(PDF_DIR.glob("*.pdf"))
    if not pdfs:
        print(f"No PDFs found in {PDF_DIR}", file=sys.stderr)
        return 1
    for pdf_path in pdfs:
        render(pdf_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
