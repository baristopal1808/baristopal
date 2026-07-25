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
  yağ/hava/gıda hatları için renk kodlu (turuncu/mavi/yeşil) 4 adımlı bir
  hortum seçim sihirbazı. `index.html` header ve hero'sundan link veriliyor.
  Adımlar: (1) Kullanım Alanı, (2) Teknik Özellikler (çap→basınç→hortum
  tipi→yüksek sıcaklık checkbox'ı→metraj; sağda seçilen hortumun SVG
  görseli), (3) Başlık ve Açı Bilgileri (BSP/METRİK/NPT/UNF/JIC + her uç
  için 0°/45°/90° açı; her iki uç da açılıysa 45°'nin katlarıyla "basma
  açısı" veya serbest giriş), (4) Sonuç/Teklif (WhatsApp linkiyle).
  Her adımın altında sabit "Emin değilim, teknik destek almak istiyorum"
  linki var → `index.html#iletisim`'e yönlendiriyor.
  "Hidrolik Yağ / Yakıt" kategorisindeki 17 hortum tipi ve çap/basınç
  verileri `hortumpdfler.pdf` (SEL/Votek kataloğu, sayfa 3-5) kaynaklıdır;
  bu PDF referans olarak repoya da eklendi (üçüncü taraf kataloğu olduğu
  için dikkatli kullanılmalı, dağıtım hakları netleştirilmedi).
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

- 2026-07-25: `hortum-sihirbazi.html` baştan sona genişletildi — "Hidrolik
  Yağ/Yakıt" kategorisine SEL/Votek kataloğundan (`hortumpdfler.pdf`,
  sayfa 3-5) 17 gerçek hortum tipi ve çap/basınç verisi eklendi, sihirbaz
  2 adımdan 4 adıma çıkarıldı (başlık/açı ayrı adım oldu), başlık tipleri
  BSP/METRİK/NPT/UNF/JIC olarak düzeltildi, basma açısı 45°'nin
  katları + serbest giriş seçeneğine çevrildi, sağ panelde hortum tipine
  göre değişen SVG görsel eklendi, sonuç ekranı sadeleştirildi. `index.html`
  içindeki 3 "Doğru Hortumu Bul" linkinden `target="_blank"` kaldırıldı.
  `hortumpdfler.pdf` referans kaynağı olarak repoya eklendi.
- 2026-07-25: Proje ilk kez incelendi, CLAUDE.md oluşturuldu ve GitHub'a
  push edildi. Şu ana kadar içerikte bir değişiklik yapılmadı, sadece
  mevcut durum belgelendi.
