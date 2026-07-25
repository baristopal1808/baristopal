# Fibar Hidrolik - Proje Notu

Bu dosya, farklı bilgisayarlardan bu projeye Claude Code ile bağlanıldığında
kaldığımız yerden devam edebilmek için tutulur. Git ile senkronize olur
(`git pull` ile her cihazda güncel kalır).

## Proje Nedir

Fibar Hidrolik adlı firma için statik (framework'süz) kurumsal tanıtım
sitesi. Sade HTML/CSS/JS, build adımı yok, dosyalar doğrudan tarayıcıda
açılarak görüntülenebiliyor.

## Dosyalar

- `index.html` — Ana kurumsal site. Tek sayfa, bölümler: Hero, Uzmanlık
  Alanları, Kurumsal (istatistikler), Ürünler, Çalışmalarımız, İletişim
  (form), Footer. Preloader açılış animasyonu var.
- `hortum-sihirbazi.html` — "Doğru Hortumu Bul" adlı ayrı araç sayfası;
  yağ/hava/gıda hatları için renk kodlu (turuncu/mavi/yeşil) bir hortum
  seçim sihirbazı. `index.html` header ve hero'sundan link veriliyor.
- `logo.jpg` / `.logo.jpg` — aynı logo dosyasının iki kopyası (biri gizli
  isimli). Henüz hangisinin gereksiz olduğu netleştirilmedi.
- `BARISTOPAL-CALISMALAR` — 0 byte, uzantısız, boş dosya. İşlevi belirsiz,
  muhtemelen yanlışlıkla oluşmuş.

## Tasarım Sistemi (index.html ve hortum-sihirbazi.html ortak)

- Renkler: `--text-main: #2A2A2A`, `--accent-blue: #2B6CB0`,
  `--bg-color: #C8CBB4` (haki/bej zemin)
- Fontlar: Başlıklar Montserrat, gövde metni Inter (Google Fonts)
- İçerik dili: Türkçe

## Bilinen Eksikler / Placeholder Veriler

- Telefon numarası her yerde placeholder: `0312 XXX XX XX`
- İletişim formu gerçek bir backend'e bağlı değil (`onsubmit="return false;"`)
- Adres genel: "Organize Sanayi Bölgesi, Ankara / Türkiye" — netleştirilmemiş

## Git / Senkronizasyon

- Remote: `origin` → `https://github.com/baristopal1808/baristopal.git`
- Branch: `main`
- Yeni bir bilgisayarda başlarken: `git clone` (ilk sefer) veya `git pull`
  (repo zaten varsa), sonra Claude Code bu dosyayı otomatik okuyup bağlamı
  yakalar.
- Değişiklik yaptıktan sonra: `git add`, `git commit`, `git push` ile
  GitHub'a gönderilmeli ki diğer cihazlar görebilsin.

## İlerleme Kaydı

- 2026-07-25: Proje ilk kez incelendi, CLAUDE.md oluşturuldu ve GitHub'a
  push edildi. Şu ana kadar içerikte bir değişiklik yapılmadı, sadece
  mevcut durum belgelendi.
