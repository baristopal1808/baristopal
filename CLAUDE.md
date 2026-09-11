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

**Tarih:** 2026-09-11

Bu oturumda proje ilk kez GitHub'a bağlandı ve birkaç yapısal/işlevsel
değişiklik yapıldı:

- **GitHub bağlantısı kuruldu:** Bu klasör git deposu haline getirildi ve
  kullanıcının GitHub hesabındaki `baristopal1808/baristopal` reposuyla
  birleştirildi (`git merge --allow-unrelated-histories`, çakışma yok).
  Commit yazarı: **Barış Topal** / `baris.topal1808@gmail.com`.
- **`montaj-proseduru` ayrı bir projeye taşındı:** Başlangıçta bu klasörün
  kendisi montaj prosedürü oluşturma aracının deposuydu (Python script +
  ürün verileri, bkz. eski geçmiş). Kullanıcı bunun site/portal projesiyle
  aynı repoda görünmesini istemedi. İçerik ayrı bir klasöre kopyalanıp
  kendi bağımsız git deposu olarak **`baristopal1808/Montajproseduru`**
  reposuna push edildi, bu depodan tamamen kaldırıldı. Yerel karşılığı artık
  `Desktop/Prosedürler/montaj-proseduru-standalone/` klasöründe (kullanıcı
  isterse Explorer'dan `montaj-proseduru` olarak yeniden adlandırabilir).
- **VS Code görünen ismi düzeltildi:** Bu klasörün adı hâlâ (tarihsel
  nedenle) "montaj-proseduru" — VS Code bunu proje adı olarak gösteriyordu
  ve kullanıcı bunu istemedi. Fiziksel yeniden adlandırma VS Code açıkken
  kilit nedeniyle yapılamadı; bunun yerine **`Fibar Hidrolik Sitesi.code-workspace`**
  dosyası oluşturuldu — kullanıcı bunu "File → Open Workspace from File..."
  ile açarsa VS Code'da isim "Fibar Hidrolik Sitesi" olarak görünür, klasör
  adı ve git deposu etkilenmez. **Kalıcı çözüm için** kullanıcı isterse
  VS Code'u kapatıp Explorer'dan klasörü `fibar-hidrolik-sitesi` gibi bir
  isme çevirebilir (git çalışmasını etkilemez).
- **VS Code eklentileri kuruldu:** Live Server, Prettier, Auto Rename Tag,
  Auto Close Tag, HTML CSS Support, Color Highlight, Gutter Preview
  (görsel önizleme), GitLens — statik HTML/CSS ağırlıklı, görsel/renk
  yoğun bu proje için seçildi.
- **`tasarim-guncelleme-onizleme/` klasörüne WhatsApp özelliği eklendi**
  (henüz SADECE önizleme klasöründe, kök dosyalara uygulanmadı):
  - `index.html`, `katalog.html`, `hortum-sihirbazi.html` — sağ altta sabit,
    yeşil (#25D366) dairesel WhatsApp butonu (`.wa-float-btn` class'ı,
    her dosyanın kendi `<style>` bloğunda tanımlı, sayfaya özel hazır mesajla
    `wa.me` linkine gidiyor).
  - `hortum-sihirbazi.html`'deki "Emin değilim, teknik destek almak
    istiyorum" linki artık `index.html#iletisim`'e değil, doğrudan WhatsApp'a
    ("...teknik destek almak istiyorum." mesajıyla) yönlendiriyor — kullanıcı
    isteğiyle: iletişim sayfasına gitmek müşteriye zaman kaybettiriyordu.
  - Numara: **`905384721912`** (kullanıcının kendi şahsi cep numarası,
    `0538 472 1912` — test amaçlı kullanılıyor, ileride gerçek WhatsApp
    Business numarasıyla değiştirilebilir). Üç dosyada da (buton + "Teklif
    İste" JS kodu + teknik destek linki) aynı numara kullanılıyor.
- **Kullanıcıya site (müşteri odaklı) ve portal (iç iletişim/iş takibi)
  için geliştirme önerileri verildi** (bkz. sohbet geçmişi) — SSS, vaka
  çalışmaları, WhatsApp/analytics, portal için görev panosu, bildirim
  sistemi, tedarikçi modülü, gerçek çoklu kullanıcı/backend ihtiyacı vb.
  Henüz hiçbiri için karar alınmadı, sadece öneri aşamasında.
- **Kurumsal tanıtım sunumu hazırlandı ve eklendi:** `kurumsal-sunum/`
  klasöründe `Fibar-Hidrolik-Kurumsal-Sunum.pdf` (6 slayt: Kapak, Biz
  Kimiz/istatistikler, Uzmanlık Alanlarımız, müşteri süreci — 6 adımlı
  "Sizinle Nasıl Çalışıyoruz", Kurucularımız, İletişim) + düzenlenebilir
  kaynağı `sunum-kaynak.html`. Marka renkleri (haki `#C8CBB4`, antrasit
  `#2A2A2A`, mavi `#2B6CB0`) ve `logo.jpg` kullanıldı. **Kurucular
  bölümü:** Fırat Aksümer (9 yıl tecrübe: 2 yıl Ostim'de pompa/hortum
  imalatı yapan bir firma, 4 yıl Teksan Hidrolik Rakor'da tüm makine
  ekibinin başında hortum kesim/presleme, sonrasında OMS Pile Driving'de
  tüm yüksek basınçlı hortum üretiminden sorumlu, sıfır hata) ve Barış
  Topal (2 yıl Çekosan Çelik Konstrüksiyon imalat sorumluluğu, ardından
  OMS Pile Driving'de Nisan 2024'ten beri Güç Ünitesi Montaj Takım
  Liderliği, 1 yıldır hortum konusunda gelişim, ayrıca bu site/portal
  işinin yürütücüsü). İletişim slaytında aynı şahsi WhatsApp numarası
  kullanıldı (`0538 472 1912`). **Not:** Barış'ın da OMS Pile Driving'de
  çalıştığı bilgisi, Fırat'ın anlatımındaki "OMS Pile Driving (şuan
  çalıştığımız şirketimiz)" ifadesinden çıkarıldı — kullanıcı onayladı,
  yanlışsa düzeltilmeli. PDF, headless Edge (`msedge --headless=new
  --print-to-pdf`) ile `sunum-kaynak.html`'den üretiliyor; kaynak
  değişirse aynı komutla yeniden üretilebilir.
- **Klasör düzeni kullanıcı tarafından "dağınık" olarak işaretlendi**
  (bkz. proje hafızası `fibar-site-folder-cleanup` — ayrı bir Claude Code
  hafıza dosyasında) — kullanıcı ileride birlikte düzenlemek istiyor,
  şimdilik dokunulmadı. Bilinen dağınıklık: `logo.jpg`/`.logo.jpg`
  kopyası, `hero-gorsel.jpeg`/`fıbar hidrolik yazısı yanındaki
  görsel.jpeg` muhtemel kopyası, Türkçe/ASCII isimli çift görsel
  klasörleri (`hortum görselleri`↔`hortum-gorselleri`, `fıbar calısmalar
  görseli`↔`calismalar`), işlevsiz 0 byte'lık `BARISTOPAL-CALISMALAR`
  dosyası.

**Sırada ne var:** Kullanıcı hem 11 Ağustos'taki tasarım yenilemesini
(font/renk/koyu tema/hero) hem de bu oturumdaki WhatsApp değişikliklerini
`tasarim-guncelleme-onizleme/` klasöründe inceleyip onaylayacak. Onaylanınca
hepsi birden kök dosyalara (`index.html`, `katalog.html`,
`hortum-sihirbazi.html`) uygulanıp önizleme klasörü kaldırılacak. Ayrıca
yukarıdaki site/portal geliştirme önerilerinden hangisiyle başlanacağına
ve klasör düzeni temizliğine ne zaman başlanacağına karar verilecek.
Kurumsal sunumdaki kurucular bölümü kullanıcı tarafından son kez
doğrulanmalı (özellikle Barış'ın OMS bağlantısı çıkarımı).

---

**Tarih:** 2026-08-11

Kullanıcı bu bilgisayara Node.js indirdi (`Desktop/node-v24.19.0-win-x64`,
portable/zip, PATH'e eklenmedi) ve "UI UX Pro Max" adlı bir Claude Code
eklentisini kurmak istedi. Araştırma sonucu bunun bir VS Code eklentisi
değil, tasarım veritabanı sunan bir Claude Code skill/plugin'i olduğu
netleşti (`nextlevelbuilder/ui-ux-pro-max-skill`) — indirilen portable
Node.js ile `npm install -g ui-ux-pro-max-cli` + `uipro init --ai claude`
komutlarıyla kuruldu, `.claude/skills/ui-ux-pro-max/` (ve yan skiller:
brand, design, design-system, banner-design, slides, ui-styling) projeye
eklendi.

Bu eklentinin renk/font veritabanından yararlanılarak site genelinde bir
tasarım yenileme oturumu yapıldı. Kullanıcı **önceki hiçbir dosyayı
kaybetmemek için** tüm değişikliklerin ayrı bir önizleme klasöründe
yapılmasını istedi: `tasarim-guncelleme-onizleme/` — kök dizindeki
`index.html`, `katalog.html`, `hortum-sihirbazi.html`, `portal-giris.html`
ve `portal/` klasörünün tamamının kopyaları + gerekli asset'ler (icons,
logo.jpg, hero-gorsel, calismalar, sirketler, hortum-gorselleri, manifest
dosyaları) burada duruyor. **Orijinal kök dosyalara hiç dokunulmadı.**

Yapılan değişiklikler (şu an sadece önizleme klasöründe):
- **Font:** Montserrat/Inter → **Lexend (başlık) + Source Sans 3 (gövde)**
  tüm sitede (index, katalog, hortum-sihirbazi, portal.css dahil — portal
  ekranlarının hepsinde font linki güncellendi).
- **Renk tutarlılığı:** Koddaki sürüklenme giderildi (`hortum-sihirbazi.html`
  ve `portal-giris.html` hâlâ eski haki `#C8CBB4` zemin kullanıyordu,
  `index.html`'de accent-blue `#1966b7` idi) — hepsi tek bir sisteme
  toplandı.
- **index.html hero bölümü baştan tasarlandı** — kullanıcının paylaştığı
  iki referans görsele (OBSIDIAN mimarlık stüdyosu, Cascade & Coal steakhouse
  sitesi) dayanarak: görsel tam genişlikte arka planda + koyu gradyan +
  metin önde bindirilmiş, "FIBAR HİDROLİK" başlığı için kalın geometrik
  **Space Grotesk** (kullanıcı bilinçli olarak ince serif yerine bunu
  seçti — endüstriyel/mühendislik güven algısını korumak için), ince
  çizgili "eyebrow" etiket, italik slogan, ok işaretli buton + sade metin
  linki, hero yüksekliği yaklaşık tam ekran (`calc(100vh - header)`).
- **Tüm site koyu temaya çevrildi** (kullanıcı isteği: "#2A2A2A zemin,
  kırık beyaz yazı") — `index.html`, `katalog.html`, `hortum-sihirbazi.html`
  uçtan uca dönüştürüldü: `--bg-color:#2A2A2A`, `--text-main:#EDEDE8`,
  `--accent-blue:#4d8fd6` (dark-bg için parlatıldı), yeni `--surface-bg`/
  `--border-color` token'ları eklendi, tüm kart/form/footer/header
  bileşenleri koyu zemine göre yeniden ayarlandı. Beyaz zemin gerektiren
  yerler (logo.jpg, partner logoları, hortum kesit fotoğrafları — hepsi
  JPEG/PNG olarak beyaz arka planla "gömülü") bilinçli olarak beyaz
  "chip" kutularıyla çerçevelendi ki görsel bozulmasın. **Personel
  Portalı bu kapsamın DIŞINDA tutuldu** — zaten kendi ayrı açık/koyu
  tema anahtarı var.
- `FIBAR_Fiyat_Teklif_Formu.pdf` adlı dağınık bir dosya repoya eklenmedi
  (kullanıcı onayıyla) — repo public olduğu için fiyat/teklif içeriği
  içerebilecek bir dosyayı bilerek dışarıda bıraktık.

**Sırada ne var:** Kullanıcı `tasarim-guncelleme-onizleme/` klasörünü
(başta `index.html`) tarayıcıda inceleyip onaylayacak. Onaylanırsa bu
değişiklikler kök dosyalara (index.html, katalog.html,
hortum-sihirbazi.html, portal/) uygulanıp önizleme klasörü kaldırılacak.

---

**Tarih:** 2026-08-01

Kullanıcı yeni bir "portal" daha istedi: şirket yetkililerinin telefonunda
kullanacağı bir mobil uygulama. Sorularla netleşti: bu bir web sitesi/PWA
DEĞİL, gerçek bir **native mobil uygulama** olacak (React Native/Expo,
hem iOS hem Android). Giriş için "mevcut portalla aynı olsun" dendi ama
native uygulama web sitesinin `localStorage`'ına erişemediğinden bu
teknik olarak mümkün değil — v1'de hiç giriş ekranı yok, bu bilinçli
bir açık nokta (bkz. aşağıdaki yeni bölüm).

İlk araç olarak "Hortum Basım Ölçüsü Hesapla" sihirbazının tam akışı
kullanıcı tarafından adım adım anlatıldı ve mimari plan (Expo + React
Navigation + AsyncStorage + react-native-svg + Montserrat/Inter fontları)
onaylandı. Ancak bu bilgisayarda **Node.js kurulu değil**, bu yüzden
gerçek Expo projesi henüz oluşturulamadı. Bunun yerine, onay/inceleme
amacıyla tamamen self-contained (fontlar dahil gömülü, harici hiçbir
isteği olmayan), site ile birebir aynı tasarım dilini kullanan tıklanabilir
bir **HTML önizlemesi** yapıldı: `hortum-basim-onizleme/index.html`.
Kullanıcı bunu yerel bir sunucu (PowerShell `HttpListener`, port 8765)
üzerinden Chrome'da açıp inceledi ve onayladı ("kontrol ettim teşekkür
ederim").

**Sırada ne var:** Bu bilgisayara (veya başka bir cihaza) Node.js
kurulduğunda, onaylanan bu tasarımı esas alan gerçek native uygulama
`hortum-basim-uygulamasi/` klasöründe Expo ile inşa edilecek (plan detayı
aşağıdaki yeni bölümde). Kullanıcı bu oturumdaki tüm çalışmayı GitHub'a
kaydetmemi istedi.

---

**Tarih:** 2026-07-26

Personel Portalı (önceki oturumda başlatılmıştı) bu oturumda çok büyüdü
ve GitHub'a push edildi (bkz. "Personel Portalı" bölümü — baştan yazıldı,
güncel hali orada). Özet: giriş artık Ayarlar'dan değiştirilebilir bir
kullanıcı adı/şifre kullanıyor (admin/admin sabit değil); anasayfa sol
menüsüz sade bir buton ızgarasına dönüştü; demo veriler (6 örnek firma,
20 örnek stok kalemi) kullanıcı isteğiyle tamamen silindi; Müşteriler
ekranına iletişim bilgileri (adres/telefon/e-posta/yetkili/not) eklendi;
yeni modüller geldi: Projeler (durum dashboard'u), Stok Hareketleri
(otomatik hareket logu), Envanter Listesi (filtreli arama), Ürün Ağacı
(Malzeme/Hizmet → Yarı Mamül → Son Ürün/Set, maliyeti otomatik
hesaplanan 3 seviyeli BOM); Sipariş Oluştur artık gerçek envanter
kalemi seçip canlı maliyet özeti gösteriyor; koyu/açık tema ve sol
menüyü gizle/sabitle tuşu eklendi; Envanter Girişi'nde malzeme kodu
artık serbest metin (FBR zorunlu değil) ve CSV ile toplu içe aktarma
var (`portal/envanter-sablonu.csv`).

**Sırada ne var:** Kullanıcı "onaylıyorum" dedi, bu oturumdaki tüm
portal değişiklikleri push edildi. Açık bir görev yok.

---

Bir önceki oturumda hem `index.html` hem `hortum-sihirbazi.html` üzerinde
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
açılarak görüntülenebiliyor. Üç alt bölümden oluşuyor:
1. **Kurumsal site** (`index.html`, `hortum-sihirbazi.html`) — herkese açık.
2. **Personel Portalı** (`portal-giris.html` + `portal/` klasörü) — giriş
   gerektiren iç kullanım prototipi (bkz. aşağıdaki ilgili bölüm).
3. **Hortum Basım Ölçüsü Mobil Uygulaması** (planlanan, henüz inşa
   edilmedi) — şirket yetkilileri için native mobil uygulama; şu an
   sadece onaylanmış bir HTML önizlemesi var (bkz. aşağıdaki ilgili
   bölüm).

## Personel Portalı

Kullanıcı adı/şifre ile giriş yapılan bir iç portal prototipi. Anasayfa
footer'ına küçük bir "Personel Girişi" linki eklendi (`index.html` →
`portal-giris.html`).

- **Giriş:** `portal-giris.html`. Varsayılan `admin`/`admin` ama artık
  SABİT DEĞİL — Ayarlar ekranından (`portal/ayarlar.html`, admin'e özel)
  kullanıcı adı/şifre değiştirilebiliyor, `getCredentials()/setCredentials()
  /checkCredentials()` (portal.js) ile yönetiliyor. ÖNEMLİ: Bu gerçek bir
  yetkilendirme DEĞİL — repo public olduğu için mekanizma kaynağı gören
  herkese açık; sadece prototip amaçlı (kullanıcı bilerek onayladı).
- **Veri saklama:** Her şey `localStorage`'da (bkz. `portal/portal.js` —
  `PORTAL_KEYS`). Sunucu/veritabanı yok, cihazlar arası PAYLAŞILMAZ.
  Bilinçli tercih; gerçek çok kullanıcılı sisteme geçilmek istenirse
  backend/bulut veritabanı ayrı bir iş olarak ele alınmalı.
- **"Aktif Firma" kavramı YOK** — kullanıcı isteğiyle kaldırıldı (birden
  fazla firma için aynı anda çalışılabiliyor). Her formda firma elle
  seçilir, otomatik ön-seçim yapılmaz.
- **Tema:** Sağ üstte koyu/açık tema tuşu (`getTheme/setTheme/toggleTheme`,
  `<html data-theme="dark|light">`), varsayılan koyu. Sol menü sabit koyu
  kalır (tema değişmez).
- **Sol menü gizle/sabitle:** Üst bardaki panel ikonuyla sol menü
  gizlenip tekrar gösterilebilir; tercih `localStorage`'da kalıcı
  (`getSidebarHidden/setSidebarHidden`).
- **Admin-only sayfalar:** `isAdmin()` şu an her zaman `true` döner (tek
  hesap var); `requireAdmin()` ve nav filtrelemesi ileride gerçek roller
  eklenirse diye ayrı tutuldu.
- **Ortak dosyalar:** `portal/portal.css`, `portal/portal.js` (auth,
  tema, sidebar render, tüm localStorage CRUD yardımcıları).
- **Ekranlar** (`portal/` klasöründe):
  - `anasayfa.html` — sol menüsüz, sade üst bar (logo yok, sadece
    başlık+tema+kullanıcı+çıkış); ortada büyük Fibar logosu, altında
    renkli hızlı-erişim kutucukları (Müşteriler, Projeler, Sipariş
    Oluştur, Maliyet Hesabı, Montaj Süreci, Stok, Dönemsel Rapor, Ürün
    Ağacı). Sol altta sabit bir Ayarlar (dişli) butonu var.
  - `firma-sec.html` (kart başlığı **"Müşteriler"**) — müşteri ekleme
    (Firma Adı zorunlu; Yetkili Kişi/Telefon/E-posta/Adres/Notlar
    opsiyonel — "şimdilik zorunlu değil" kullanıcı kararı) + liste +
    "Düzenle" ile sonradan bilgi tamamlama. Demo firmalar (Junttan/OMS/
    Teksan/Nurol/CAT/Hortum Market) kullanıcı isteğiyle silindi.
  - `siparis.html` — firma + kategori seçilince o kategorideki gerçek
    envanter kalemleri (kod+açıklama) listeleniyor; seçilince Birim
    Fiyat ve (adet×fiyat) Tahmini Maliyet canlı hesaplanıp gösteriliyor
    ve sipariş tablosuna sütun olarak kaydediliyor.
  - `maliyet.html` — manuel maliyet hesaplayıcı (adet×birim fiyat+
    işçilik+KDV) + kaydedilen tekliflerin listesi.
  - `montaj.html` — saha montaj kayıtları (Planlandı/Sahada/Tamamlandı/
    İptal).
  - `projeler.html` — üstte durum dashboard'u (Henüz Başlanmadı/Devam
    Ediyor/Sevk Edildi sayıları, tıklanınca filtreler) + proje listesi.
  - `stok.html` — Nipel/Rakor/Soket/Hortum sekmeleri; adet VE kritik
    seviye satır bazında düzenlenip kaydedilebiliyor. Demo veriler
    silindi, gerçek envanter Envanter Girişi'nden eklenir. Adet
    değişikliği otomatik Stok Hareketleri'ne loglanır.
  - `stok-hareketleri.html` — her adet değişikliğinin (tarih, kod,
    eski/yeni miktar, kullanıcı) otomatik kaydedildiği log; sadece bu
    özellik eklendikten sonraki değişiklikleri tutar.
  - `envanter-listesi.html` — tüm kategorilerdeki envanter kartlarını
    tek tabloda, Malzeme Kodu/Açıklama/Grup filtreleriyle arama.
  - `envanter-giris.html` (admin'e özel) — yeni envanter kartı: Malzeme
    Kodu artık SERBEST METİN (kullanıcı "FBR zorunlu olmasın, istediğim
    kodu gireyim" dedi — otomatik üretim kaldırıldı, sadece benzersizlik
    kontrolü var), Malzeme Grubu, Malzeme Açıklaması, Takip Birimi
    (Hortum seçilince otomatik "Metre" önerilir), Kritik Stok Seviyesi,
    Birim Maliyet (₺). Adet burada YOK — kart oluşturma ile stok adedi
    girme bilinçli olarak ayrıldı, adet sonradan Stok Durumu'ndan
    girilir. Ayrıca **Toplu İçe Aktar**: `portal/envanter-sablonu.csv`
    şablonunu (Excel'de doldurulup .csv kaydedilir) yükleyip tek
    seferde çok sayıda kart oluşturma; CSV ayrıştırma pozisyoneldir
    (sütun başlığı metnine bakmaz, sırasına bakar), Hortum grubunda
    Takip Birimi boşsa otomatik Metre atanır.
  - `urun-agaci.html` — 3 sekmeli ürün ağacı: **Malzeme/Hizmet** (salt
    görüntüleme, = envanter kartları), **Yarı Mamül** (birden fazla
    malzemeyi miktarlarıyla birleştirip bir montaj konfigürasyonu
    tanımlama, maliyeti bileşenlerden otomatik hesaplanır), **Son
    Ürün/Set** (birden fazla yarı mamülü birleştiren üst seviye, maliyeti
    yine otomatik). Veri: `getYariMamuller/addYariMamul/yariMamulCost`,
    `getSonUrunler/addSonUrun/sonUrunCost` (portal.js).
  - `rapor.html` — Aylık/Çeyreklik dönem seçip sipariş/montaj/maliyet
    özetleri.
  - `ayarlar.html` (admin'e özel) — giriş kullanıcı adı/şifresini
    değiştirme.

## Hortum Basım Ölçüsü Mobil Uygulaması (Planlanan)

Şirket yetkilileri için telefonda kullanılacak, kurumsal siteden ve
Personel Portalı'ndan tamamen bağımsız **gerçek bir native mobil
uygulama** (React Native/Expo, hem iOS hem Android). Henüz inşa
edilmedi — bu bilgisayarda Node.js kurulu olmadığı için proje
oluşturulamadı. Şu an sadece onaylanmış bir HTML önizlemesi var.

- **Durum:** `hortum-basim-onizleme/index.html` — tıklanabilir, tek
  dosyalık statik HTML önizleme (Montserrat/Inter fontları gerçek
  dosya olarak gömülü, site ile birebir aynı renkler: `#2A2A2A` metin,
  `#2B6CB0` accent-mavi, koyu/açık tema desteği). SADECE tasarım/akış
  onayı içindir, gerçek uygulama DEĞİLDİR — marka ekle/sil kısmı
  gerçekten `localStorage`'a yazıyor (tarayıcıda kalıcı), geri kalan
  her şey (hesaplama, ekran geçişleri) JS ile simüle edilmiş durumda.
  Kullanıcı bu önizlemeyi inceleyip onayladı.
- **Sırada ne var:** Node.js kurulduğunda, bu önizlemedeki tasarım
  esas alınarak gerçek uygulama `hortum-basim-uygulamasi/` klasöründe
  Expo ile kurulacak: `@react-navigation/native` + `native-stack`,
  `@react-native-async-storage/async-storage` (marka listesi için),
  `react-native-svg` (soket görselleri), `@expo-google-fonts/*`
  (Montserrat/Inter).
- **Giriş ekranı v1'de YOK** — kullanıcı "mevcut portalla aynı olsun"
  dedi ama native uygulama web sitesinin `localStorage`'ına erişemez
  (ayrı çalışma zamanı), yani birebir paylaşım teknik olarak mümkün
  değil. Kendi bağımsız giriş mekanizması istenirse ayrı bir iş olarak
  ele alınmalı.
- **v1 kapsamı — "Hortum Basım Ölçüsü Hesapla" sihirbazı:**
  1. **Marka Seç** — SEL, DUNLOP, MANULİ, GATES, ALFAGOMMA (admin
     ileride ekleyip silebilir; önizlemede bu kısım gerçekten çalışır).
  2. **Rakor Tipi Seç** — INTERLOCK veya SIYIRMALI; seçilince altta
     otomatik "INTERLOCK SOKET" / "SIYIRMALI SOKET" etiketi ve
     kademeli (interlock) veya düz/tırtıksız (sıyırmalı) vektörel
     soket görseli beliriyor.
  3. **Ölçüleri Gir** — Soyulmuş Hortum Dış Çapı + Soket İç Çapı (mm).
     "Hesapla": `fark = soketİçÇapı − hortumDışÇapı`; etek payı
     SIYIRMALI'da +0,5mm, INTERLOCK'ta +0,3mm; `basımÖlçüsü = fark +
     etekPayı`. Ardından "Hortumu BAS".
  4. **Mastar sorusu** — "Rakor içerisinden mastar ile ölçtün mü?"
     Hayır'da uyarı gösterip ilerletmiyor; Evet ile devam ediyor.
  5. **Basım sonucu** — "Basım başarılı mı?" Evet → tebrik mesajı
     ("TEBRİKLER! Mükemmel basımlara devam etmenizi dilerim.").
     Hayır → "BASIM BAŞARISIZ, bu ürün hurdaya ayrılmalıdır." İkisi de
     "Yeni Basıma Başla" ile ana sayfaya dönüyor.
- **Gelecekte planlanan (henüz spesifiye edilmedi):** İkinci bir araç
  — bazı hortumlar için sabit/hazır basım ölçülerinin listelendiği
  hızlı bakış ekranı. Ana Sayfa'da "Yakında" etiketli bir kart olarak
  önizlemede yer tutucu şeklinde duruyor.

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
- `portal-giris.html` ve `portal/` — Personel Portalı (bkz. yukarıdaki
  "Personel Portalı" bölümü).
- `hortum-basim-onizleme/index.html` — Planlanan mobil uygulamanın
  onay için hazırlanmış tek dosyalık HTML önizlemesi (bkz. yukarıdaki
  "Hortum Basım Ölçüsü Mobil Uygulaması" bölümü). Gerçek uygulama
  değil, sadece tasarım/akış onayı içindir.

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

- 2026-08-11: "UI UX Pro Max" Claude Code skill'i kuruldu
  (`.claude/skills/ui-ux-pro-max/` ve yan skiller). Bu eklentiden
  yararlanılarak `tasarim-guncelleme-onizleme/` adlı ayrı bir önizleme
  klasöründe (kök dosyalara dokunmadan) site geneli bir tasarım
  yenilemesi yapıldı ve push edildi: font Montserrat/Inter →
  Lexend + Source Sans 3, index/katalog/hortum-sihirbazi arasındaki
  renk tutarsızlıkları giderildi, index.html hero bölümü kullanıcının
  paylaştığı referanslara (OBSIDIAN, Cascade & Coal) göre yeniden
  tasarlandı (tam genişlik arka plan görsel + Space Grotesk başlık +
  eyebrow etiket + italik slogan), ve son olarak kullanıcı isteğiyle
  üç sayfa da (index, katalog, hortum-sihirbazi) uçtan uca koyu temaya
  (#2A2A2A zemin, kırık beyaz metin) çevrildi. Personel Portalı bu
  kapsamın dışında tutuldu. Onay bekleniyor (bkz. "Son Konuşma Özeti").
- 2026-08-01: Yeni bir mobil uygulama fikri planlandı — şirket
  yetkilileri için native (React Native/Expo) bir uygulama, ilk aracı
  "Hortum Basım Ölçüsü Hesapla" sihirbazı (marka → rakor tipi → ölçü
  girişi/hesaplama → mastar onayı → basım sonucu). Bu bilgisayarda
  Node.js kurulu olmadığından gerçek uygulama henüz kurulamadı; onun
  yerine tasarım onayı için `hortum-basim-onizleme/index.html`
  önizlemesi oluşturuldu ve push edildi (bkz. "Hortum Basım Ölçüsü
  Mobil Uygulaması" bölümü).
- 2026-07-26: Personel Portalı büyük ölçüde genişletildi ve push edildi:
  admin/admin artık Ayarlar'dan değiştirilebiliyor; "aktif firma" kavramı
  kaldırıldı; anasayfa sol menüsüz sade kutucuk ızgarasına dönüştü;
  koyu/açık tema + sol menü gizle/sabitle tuşu eklendi; demo veriler
  (6 firma, 20 stok kalemi) silindi; Müşteriler'e iletişim bilgileri
  (adres/telefon/e-posta/yetkili/not, opsiyonel) + düzenleme eklendi;
  yeni ekranlar: Projeler (durum dashboard'u), Stok Hareketleri (otomatik
  log), Envanter Listesi (filtreli arama), Ürün Ağacı (Malzeme/Hizmet →
  Yarı Mamül → Son Ürün/Set, otomatik maliyet); Sipariş Oluştur artık
  gerçek envanter kalemi seçip canlı maliyet özeti gösteriyor; Envanter
  Girişi'nde malzeme kodu serbest metin oldu, birim maliyet alanı ve
  CSV ile toplu içe aktarma (`portal/envanter-sablonu.csv`) eklendi,
  Hortum grubunda Takip Birimi otomatik "Metre" oluyor; Stok Durumu'nda
  kritik seviye de düzenlenebiliyor.
- 2026-07-26: Personel Portalı ilk kez oluşturuldu — `portal-giris.html`
  ve `portal/` klasöründe anasayfa, firma-sec, siparis, maliyet, montaj,
  stok ekranları. Ortak tasarım/mantık `portal/portal.css` ve
  `portal/portal.js` içinde. Tüm veriler localStorage'da (prototip,
  cihazlar arası paylaşılmıyor).
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
