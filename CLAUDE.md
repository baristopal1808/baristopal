# Fibar Hidrolik - Proje Notu

Bu dosya, farklı bilgisayarlardan bu projeye Claude Code ile bağlanıldığında
kaldığımız yerden devam edebilmek için tutulur. Git ile senkronize olur
(`git pull` ile her cihazda güncel kalır).

Not: Bu dosya sohbetin birebir dökümünü tutmaz (pratik değil). Bunun yerine
"Son Konuşma Özeti" bölümü her oturum sonunda güncellenir ve o oturumda
neyi konuştuğumuzu, hangi kararları aldığımızı ve sırada ne olduğunu özetler
— böylece başka bir cihazda açtığınızda sıfırdan değil, kaldığımız yerden
devam ederiz.

## Son Konuşma Özeti (Devam Notu)

**Tarih:** 2026-07-26

Uzun bir oturumda hem `index.html` hem `hortum-sihirbazi.html` üzerinde
birçok görsel/işlevsel geliştirme yapıldı ve hepsi GitHub'a push edildi
(bkz. İlerleme Kaydı'ndaki ilgili maddeler). Özet:

- **index.html:** Hero'ya "FIBAR HİDROLİK" yazısının yanına gerçek bir
  görsel eklendi (tam yükseklikte, `object-fit: cover` ile). "Birlikte
  Çalıştığımız Firmalar" adında kayan (marquee) bir logo bandı eklendi —
  ÖVS, Teksan Hidrolik Rakor, Nurol Makina, CAT (Borusan Cat), Junttan,
  Hortum Market; hepsi kendi sitelerine link veriyor. Çalışmalarımız
  bölümündeki 3 sabit placeholder kart kaldırıldı, yerine gerçek 6 fotoğraf
  kondu (kategorize etme işi ileride yapılacak). Ürünlerimiz bölümü
  Nipeller/Rakorlar/Soketler/Hortumlar olarak 4 kaleme indirildi, kısa
  marka diline uygun açıklamalar yazıldı. Üst bilgi barı + ana menü artık
  birlikte sticky (sayfa kaydırılınca sabit kalıyor). Sol üstte Instagram +
  LinkedIn ikonu ve "Bizi Takip Edin" yazısı, sağ üstte TR/EN dil seçici
  eklendi (yalnızca görsel/tıklanabilir; İngilizce çeviri kullanıcı isteğiyle
  bilinçli olarak yapılmadı). Footer'a da Instagram/LinkedIn/YouTube SVG
  ikonları eklendi.
- **hortum-sihirbazi.html:** Hortum tipi seçimi artık akıllı — kullanıcı
  basınç girince, o basıncı karşılayan en düşük (yani en yakın/en uygun)
  hortum otomatik seçiliyor ve "(Önerilen)" etiketleniyor. Kullanıcı elle
  daha yüksek basınçlı bir tip seçip "İleri"ye basarsa, ilerlemeden önce
  açıklamalı bir "Emin misiniz?" onay modalı çıkıyor. Ayrıca sağ paneldeki
  vektörel çizimlerin yerine gerçek hortum kesit fotoğrafları kondu (13/16
  tip; R4 ve fren hatları için görsel henüz yok, vektörel yedek kullanılmaya
  devam ediyor).

**Bekleyen / netleşmemiş noktalar:**
- Instagram, LinkedIn, YouTube linkleri hâlâ placeholder (`#`) — hesaplar
  henüz açılmadı, kullanıcı ileride adresleri verecek.
- `hortum-gorselleri/` klasöründe R4 (SAE J517 R4), fren-hidrolik
  (SAE J1401) ve fren-hava (SAE J1402) için görsel eksik — kullanıcı bu
  görselleri de ekleyecek (aynı isimlendirme mantığıyla `hortum görselleri`
  klasörüne).
- TR/EN dil seçici arayüzü var ama İngilizce içerik çevirisi yapılmadı
  (kullanıcı özellikle "şimdilik çevirme" dedi).
- `logo.jpg`/`.logo.jpg`, `BARISTOPAL-CALISMALAR` ve yeni beliren isimsiz
  `.jpeg` dosyasının akıbeti hâlâ netleşmedi (bkz. Dosyalar bölümü).

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
- `.jpeg` — isimsiz, 2026-07-26'da beliren bir başka dosya; muhtemelen
  `fıbar hidrolik yazısı yanındaki görsel.jpeg` ile aynı kaynaktan yanlışlıkla
  oluşmuş bir kopya. Henüz netleştirilmedi.
- `sirketler/` — Anasayfadaki "Birlikte Çalıştığımız Firmalar" logo bandı
  için kaynak görseller (ÖVS, Teksan, Nurol Makina, CAT, Junttan,
  Hortum Market).
- `calismalar/` — Anasayfadaki Çalışmalarımız bölümünde gösterilen 6 gerçek
  fotoğraf (ASCII isimlendirilmiş; orijinalleri "fıbar calısmalar görseli/"
  klasöründe duruyor).
- `hero-gorsel.jpeg` — Hero bölümünde "FIBAR HİDROLİK" yazısının yanında
  kullanılan görsel (orijinali "fıbar hidrolik yazısı yanındaki görsel.jpeg").
- `hortum-gorselleri/` — Hortum sihirbazında sağ panelde gösterilen gerçek
  hortum kesit fotoğrafları, ASCII isimlendirilmiş (orijinalleri
  "hortum görselleri/" klasöründe duruyor). R4 ve fren hatları için henüz
  görsel yok.

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

- 2026-07-26: `index.html`'e hero görseli, kayan firma logosu bandı
  (ÖVS/Teksan/Nurol Makina/CAT/Junttan/Hortum Market, hepsi linkli),
  Çalışmalarımız için 6 gerçek fotoğraf, güncellenmiş Ürünlerimiz (Nipeller/
  Rakorlar/Soketler/Hortumlar), sticky üst bar+menü, sol üstte Instagram/
  LinkedIn + "Bizi Takip Edin", sağ üstte TR/EN dil seçici (görsel amaçlı,
  çeviri yok) ve footer'da sosyal medya ikonları eklendi. `hortum-sihirbazi.
  html`'de hortum tipi seçimi akıllandırıldı — basınca en yakın/yeterli tip
  otomatik seçilip "(Önerilen)" etiketleniyor, kullanıcı daha yüksek basınçlı
  bir tip seçip ilerlerse açıklamalı onay isteniyor; ayrıca vektörel hortum
  çizimleri yerine 13 tip için gerçek kesit fotoğrafı kondu.
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
