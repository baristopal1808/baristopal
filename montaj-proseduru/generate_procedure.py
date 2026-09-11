"""
generate_procedure.py
Kurumsal kimlige uygun, A3 yatay standart montaj proseduru (.pdf) uretici.
HTML sablonundan (Jinja2) render edip, sistemde kurulu Edge tarayicisi
uzerinden (Playwright) PDF'e cevirir.

Kullanim:
    python generate_procedure.py --urun urunler/CP1330 \
        --config config/kurumsal_kimlik.json --out cikti/
"""

import base64
import csv
import json
import argparse
import mimetypes
from pathlib import Path

import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape
from playwright.sync_api import sync_playwright

BASE_DIR = Path(__file__).parent
TEMPLATES_DIR = BASE_DIR / "templates"

SAYFA_GENISLIK_MM = 420  # A3 yatay
SAYFA_YUKSEKLIK_MM = 297
UST_MARJ_MM = 26
ALT_MARJ_MM = 28
YAN_MARJ_MM = 14


def load_kurumsal_kimlik(config_path: Path) -> dict:
    with open(config_path, encoding="utf-8") as f:
        return json.load(f)


def load_urun_bilgisi(urun_dir: Path) -> dict:
    with open(urun_dir / "urun_bilgisi.json", encoding="utf-8") as f:
        return json.load(f)


def load_malzeme_listesi(urun_dir: Path) -> list:
    path = urun_dir / "malzeme_listesi.csv"
    if not path.exists():
        return []
    with open(path, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def load_notlar(urun_dir: Path) -> list:
    path = urun_dir / "notlar.yaml"
    if not path.exists():
        return []
    with open(path, encoding="utf-8") as f:
        veri = yaml.safe_load(f)
        return (veri or {}).get("notlar", [])


def load_islem_adimlari(urun_dir: Path) -> list:
    path = urun_dir / "islem_adimlari.yaml"
    if not path.exists():
        return []
    with open(path, encoding="utf-8") as f:
        veri = yaml.safe_load(f)
        return (veri or {}).get("adimlar", [])


def to_data_uri(path) -> str | None:
    if not path:
        return None
    path = Path(path)
    if not path.exists():
        return None
    mime = mimetypes.guess_type(path.name)[0] or "image/png"
    veri = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{veri}"


def render_govde_html(env: Environment, kimlik: dict, urun: dict, urun_dir: Path,
                       malzemeler: list, notlar: list, adimlar: list) -> str:
    for adim in adimlar:
        adim["gorsel_b64"] = to_data_uri(urun_dir / adim["gorsel"]) if adim.get("gorsel") else None

    gorsel_patlamis = to_data_uri(urun_dir / urun.get("patlamis_gorunum_dosya", "patlamis_gorunum.png"))

    tmpl = env.get_template("procedure.html")
    return tmpl.render(
        kimlik=kimlik,
        urun=urun,
        malzemeler=malzemeler,
        notlar=notlar,
        adimlar=adimlar,
        gorsel_patlamis=gorsel_patlamis,
    )


def render_header_footer_html(env: Environment, kimlik: dict, urun: dict) -> tuple[str, str]:
    logo = to_data_uri(kimlik.get("logo_yolu"))
    header_html = env.get_template("header.html").render(kimlik=kimlik, logo=logo)
    footer_html = env.get_template("footer.html").render(kimlik=kimlik, urun=urun)
    return header_html, footer_html


def generate(urun_dir: Path, config_path: Path, out_dir: Path):
    kimlik = load_kurumsal_kimlik(config_path)
    urun = load_urun_bilgisi(urun_dir)
    malzemeler = load_malzeme_listesi(urun_dir)
    notlar = load_notlar(urun_dir)
    adimlar = load_islem_adimlari(urun_dir)

    env = Environment(loader=FileSystemLoader(TEMPLATES_DIR), autoescape=select_autoescape(["html"]))
    govde_html = render_govde_html(env, kimlik, urun, urun_dir, malzemeler, notlar, adimlar)
    header_html, footer_html = render_header_footer_html(env, kimlik, urun)

    out_dir.mkdir(parents=True, exist_ok=True)
    dosya_govde = f"{urun['urun_kodu']}_Rev{urun.get('revizyon', 'A')}_Montaj_Proseduru"

    # Incelemek/hata ayiklamak icin ara HTML ciktisi da yazilir.
    (out_dir / f"{dosya_govde}.html").write_text(govde_html, encoding="utf-8")

    pdf_path = out_dir / f"{dosya_govde}.pdf"
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge")
        try:
            page = browser.new_page()
            page.set_content(govde_html, wait_until="load")
            page.pdf(
                path=str(pdf_path),
                width=f"{SAYFA_GENISLIK_MM}mm",
                height=f"{SAYFA_YUKSEKLIK_MM}mm",
                print_background=True,
                display_header_footer=True,
                header_template=header_html,
                footer_template=footer_html,
                margin={
                    "top": f"{UST_MARJ_MM}mm",
                    "bottom": f"{ALT_MARJ_MM}mm",
                    "left": f"{YAN_MARJ_MM}mm",
                    "right": f"{YAN_MARJ_MM}mm",
                },
            )
        finally:
            browser.close()

    print(f"Oluşturuldu: {pdf_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--urun", required=True, type=Path)
    parser.add_argument("--config", default=Path("config/kurumsal_kimlik.json"), type=Path)
    parser.add_argument("--out", default=Path("cikti"), type=Path)
    args = parser.parse_args()
    generate(args.urun, args.config, args.out)
