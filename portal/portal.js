/* ============================================================
   Fibar Hidrolik - Personel Portalı ortak JS dosyası
   ÖNEMLİ: Bu portalın girişi (admin/admin) ve tüm verileri
   (sipariş, stok, maliyet, montaj) yalnızca bu tarayıcının
   localStorage'ında tutulur. Gerçek bir sunucu/veritabanı yoktur;
   başka bir bilgisayardan girildiğinde veriler paylaşılmaz ve
   giriş bilgisi sayfa kaynağında düz metin olarak durur. Bu bir
   prototip/demo amaçlıdır, gerçek yetkilendirme sağlamaz.
   ============================================================ */

const PORTAL_KEYS = {
    auth: 'fibarPortalAuth',
    user: 'fibarPortalUser',
    companies: 'fibarPortalCompanies',
    orders: 'fibarPortalOrders',
    montaj: 'fibarPortalMontaj',
    stok: 'fibarPortalStok',
    costCalcs: 'fibarPortalCostCalcs',
    theme: 'fibarPortalTheme',
    sidebarHidden: 'fibarPortalSidebarHidden',
    credentials: 'fibarPortalCredentials',
    stokVersion: 'fibarPortalStokVersion',
    projeler: 'fibarPortalProjeler',
    stokHareketleri: 'fibarPortalStokHareketleri',
    companiesVersion: 'fibarPortalCompaniesVersion',
    yariMamuller: 'fibarPortalYariMamuller',
    sonUrunler: 'fibarPortalSonUrunler'
};

/* Demo/örnek stok verisi kullanıcı isteğiyle tamamen kaldırıldı (bkz. DEFAULT_STOK).
   Bu sayı arttırıldığında, daha önce tarayıcıda kayıtlı olan eski demo verisi
   (varsa) bir kerelik silinip yerine boş kategoriler konur. */
const STOK_DATA_VERSION = 2;

/* Kullanıcı isteğiyle örnek/demo firmalar tamamen kaldırıldı;
   gerçek müşteriler Müşteriler ekranından eklenecek. */
const DEFAULT_COMPANIES = [];

/* Bu sayı arttırıldığında, daha önce tarayıcıda kayıtlı olan eski demo
   firma verisi (varsa) bir kerelik silinip yerine boş liste konur. */
const COMPANIES_DATA_VERSION = 2;

/* Kullanıcı isteğiyle örnek/demo stok kayıtları tamamen kaldırıldı;
   gerçek envanter, Envanter Girişi ekranından girilecek. */
const DEFAULT_STOK = {
    nipel: [],
    rakor: [],
    soket: [],
    hortum: []
};

const STOK_UNITS = ['Adet', 'Metre', 'Santimetre', 'Kilogram', 'Litre', 'Bidon', 'Varil'];

const STOK_CATEGORY_LABELS = {
    nipel: 'Nipel',
    rakor: 'Rakor',
    soket: 'Soket',
    hortum: 'Hortum'
};

/* --- Tema (koyu/açık) --- */
function getTheme() {
    return localStorage.getItem(PORTAL_KEYS.theme) || 'dark';
}
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}
function setTheme(theme) {
    localStorage.setItem(PORTAL_KEYS.theme, theme);
    applyTheme(theme);
}
function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
}

/* --- Dönemsel rapor tarih yardımcıları --- */
const MONTH_NAMES = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const QUARTER_LABELS = ['1. Çeyrek (Oca-Mar)', '2. Çeyrek (Nis-Haz)', '3. Çeyrek (Tem-Eyl)', '4. Çeyrek (Eki-Ara)'];

function monthRange(year, monthIndex) {
    return { start: new Date(year, monthIndex, 1), end: new Date(year, monthIndex + 1, 1) };
}
function quarterRange(year, quarterNum) {
    const startMonth = (quarterNum - 1) * 3;
    return { start: new Date(year, startMonth, 1), end: new Date(year, startMonth + 3, 1) };
}
function isWithinRange(isoDate, range) {
    if (!isoDate) return false;
    const d = new Date(isoDate);
    return d >= range.start && d < range.end;
}

/* --- Güvenlik / kaçış yardımcıları --- */
function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

/* --- Kimlik bilgileri (kullanıcı adı/şifre), Ayarlar ekranından değiştirilebilir --- */
function getCredentials() {
    const raw = localStorage.getItem(PORTAL_KEYS.credentials);
    if (!raw) {
        const def = { username: 'admin', password: 'admin' };
        localStorage.setItem(PORTAL_KEYS.credentials, JSON.stringify(def));
        return def;
    }
    try { return JSON.parse(raw); } catch { return { username: 'admin', password: 'admin' }; }
}
function setCredentials(username, password) {
    localStorage.setItem(PORTAL_KEYS.credentials, JSON.stringify({ username, password }));
}
function checkCredentials(username, password) {
    const c = getCredentials();
    return username === c.username && password === c.password;
}

/* --- Oturum --- */
function isLoggedIn() {
    return localStorage.getItem(PORTAL_KEYS.auth) === 'true';
}
function currentUser() {
    return localStorage.getItem(PORTAL_KEYS.user) || 'admin';
}
/* Bu portalda tek hesap var ve o hesap her zaman admin kabul edilir.
   Fonksiyon, ileride gerçek roller eklenirse tek değişecek yer olsun diye ayrı tutuldu. */
function isAdmin() {
    return true;
}
function logout() {
    localStorage.removeItem(PORTAL_KEYS.auth);
    localStorage.removeItem(PORTAL_KEYS.user);
    window.location.href = '../portal-giris.html';
}

/* --- Firmalar (her firmanın adı + FBR-AA# şeklinde müşteri kodu var) --- */
function getCompanies() {
    const storedVersion = Number(localStorage.getItem(PORTAL_KEYS.companiesVersion) || '1');
    if (storedVersion < COMPANIES_DATA_VERSION) {
        // Kullanıcı isteğiyle, daha önce kayıtlı olan demo firmalar bir kerelik temizlenir.
        localStorage.setItem(PORTAL_KEYS.companies, JSON.stringify(DEFAULT_COMPANIES));
        localStorage.setItem(PORTAL_KEYS.companiesVersion, String(COMPANIES_DATA_VERSION));
        return [...DEFAULT_COMPANIES];
    }

    const raw = localStorage.getItem(PORTAL_KEYS.companies);
    if (!raw) {
        localStorage.setItem(PORTAL_KEYS.companies, JSON.stringify(DEFAULT_COMPANIES));
        return JSON.parse(JSON.stringify(DEFAULT_COMPANIES));
    }
    try {
        let parsed = JSON.parse(raw);
        // Eski sürümde firmalar düz metin diziisiydi; geriye dönük uyumluluk için dönüştür.
        let changed = false;
        if (parsed.length && typeof parsed[0] === 'string') {
            parsed = parsed.map((name, i) => ({ name, code: `FBR-AA${i + 1}` }));
            changed = true;
        }
        if (changed) localStorage.setItem(PORTAL_KEYS.companies, JSON.stringify(parsed));
        return parsed;
    } catch { return JSON.parse(JSON.stringify(DEFAULT_COMPANIES)); }
}
function nextCompanyCode(companies) {
    return `FBR-AA${companies.length + 1}`;
}
/* details: { address, phone, email, contactPerson, notes } — hepsi opsiyonel.
   İleride zorunlu kılınmak istenirse burada validasyon eklenebilir; şimdilik
   kullanıcı isteğiyle serbest bırakıldı. */
function addCompany(name, details) {
    const companies = getCompanies();
    if (!companies.some(c => c.name === name)) {
        companies.push({
            name,
            code: nextCompanyCode(companies),
            address: '', phone: '', email: '', contactPerson: '', notes: '',
            ...(details || {})
        });
        localStorage.setItem(PORTAL_KEYS.companies, JSON.stringify(companies));
    }
    return companies;
}
function updateCompanyDetails(name, details) {
    const companies = getCompanies();
    const company = companies.find(c => c.name === name);
    if (company) {
        Object.assign(company, details);
        localStorage.setItem(PORTAL_KEYS.companies, JSON.stringify(companies));
    }
    return companies;
}
function getCompanyCode(name) {
    const found = getCompanies().find(c => c.name === name);
    return found ? found.code : '';
}

/* --- Genel liste yardımcıları (id üretimi) --- */
function nextId(list) {
    return list.reduce((max, item) => Math.max(max, item.id || 0), 0) + 1;
}

/* --- Siparişler --- */
function getOrders() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.orders)) || []; } catch { return []; }
}
function saveOrders(list) {
    localStorage.setItem(PORTAL_KEYS.orders, JSON.stringify(list));
}
function addOrder(order) {
    const list = getOrders();
    const record = { id: nextId(list), status: 'Yeni', createdAt: new Date().toISOString(), ...order };
    list.unshift(record);
    saveOrders(list);
    return record;
}
function updateOrderStatus(id, status) {
    const list = getOrders();
    const item = list.find(o => o.id === id);
    if (item) { item.status = status; saveOrders(list); }
}
function deleteOrder(id) {
    saveOrders(getOrders().filter(o => o.id !== id));
}

/* --- Montaj kayıtları --- */
function getMontajList() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.montaj)) || []; } catch { return []; }
}
function saveMontajList(list) {
    localStorage.setItem(PORTAL_KEYS.montaj, JSON.stringify(list));
}
function addMontaj(record) {
    const list = getMontajList();
    const item = { id: nextId(list), status: 'Planlandı', createdAt: new Date().toISOString(), ...record };
    list.unshift(item);
    saveMontajList(list);
    return item;
}
function updateMontajStatus(id, status) {
    const list = getMontajList();
    const item = list.find(m => m.id === id);
    if (item) { item.status = status; saveMontajList(list); }
}
function deleteMontaj(id) {
    saveMontajList(getMontajList().filter(m => m.id !== id));
}

/* --- Stok --- */
function getStok() {
    const storedVersion = Number(localStorage.getItem(PORTAL_KEYS.stokVersion) || '1');
    if (storedVersion < STOK_DATA_VERSION) {
        // Kullanıcı isteğiyle, daha önce tarayıcıda kayıtlı olan demo stok
        // verisi ne olursa olsun bir kerelik temizlenir.
        const fresh = JSON.parse(JSON.stringify(DEFAULT_STOK));
        localStorage.setItem(PORTAL_KEYS.stok, JSON.stringify(fresh));
        localStorage.setItem(PORTAL_KEYS.stokVersion, String(STOK_DATA_VERSION));
        return fresh;
    }

    const raw = localStorage.getItem(PORTAL_KEYS.stok);
    let data;
    if (!raw) {
        data = JSON.parse(JSON.stringify(DEFAULT_STOK));
        localStorage.setItem(PORTAL_KEYS.stok, JSON.stringify(data));
        return data;
    }
    try { data = JSON.parse(raw); } catch { data = JSON.parse(JSON.stringify(DEFAULT_STOK)); }

    // Eski kayıtlarda malzeme kodu yoksa, mevcut en yüksek koddan devam ederek doldur.
    let maxCode = 0;
    Object.values(data).forEach(items => (items || []).forEach(it => {
        const n = parseInt((it.code || '').replace('FBR', ''), 10);
        if (!isNaN(n) && n > maxCode) maxCode = n;
    }));
    let changed = false;
    Object.values(data).forEach(items => (items || []).forEach(it => {
        if (!it.code) {
            maxCode++;
            it.code = 'FBR' + String(maxCode).padStart(5, '0');
            changed = true;
        }
        if (!it.unit) {
            it.unit = 'Adet';
            changed = true;
        }
    }));
    if (changed) saveStok(data);
    return data;
}
function saveStok(data) {
    localStorage.setItem(PORTAL_KEYS.stok, JSON.stringify(data));
}
function updateStokQty(category, itemIndex, newQty) {
    const data = getStok();
    const item = data[category] && data[category][itemIndex];
    if (item) {
        const oldQty = item.qty;
        item.qty = newQty;
        saveStok(data);
        if (oldQty !== newQty) {
            addStokHareket({
                code: item.code,
                name: item.name,
                category,
                oldQty,
                newQty,
                delta: newQty - oldQty,
                user: currentUser(),
                date: new Date().toISOString()
            });
        }
    }
}

function updateStokCritical(category, itemIndex, newCritical) {
    const data = getStok();
    const item = data[category] && data[category][itemIndex];
    if (item) {
        item.critical = newCritical;
        saveStok(data);
    }
}

/* --- Stok Hareketleri: her miktar değişikliğinin otomatik kaydedildiği log --- */
function getStokHareketleri() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.stokHareketleri)) || []; } catch { return []; }
}
function addStokHareket(record) {
    const list = getStokHareketleri();
    list.unshift({ id: nextId(list), ...record });
    localStorage.setItem(PORTAL_KEYS.stokHareketleri, JSON.stringify(list));
}
function stokDurum(qty, critical) {
    if (qty <= critical * 0.5) return { key: 'kritik', label: 'Kritik' };
    if (qty <= critical) return { key: 'az', label: 'Az' };
    return { key: 'yeterli', label: 'Yeterli' };
}
function nextStokCode() {
    const data = getStok();
    let maxCode = 0;
    Object.values(data).forEach(items => (items || []).forEach(it => {
        const n = parseInt((it.code || '').replace('FBR', ''), 10);
        if (!isNaN(n) && n > maxCode) maxCode = n;
    }));
    return 'FBR' + String(maxCode + 1).padStart(5, '0');
}
function stokCodeExists(code) {
    const data = getStok();
    return Object.values(data).some(items => (items || []).some(it => it.code === code));
}
function addStokItem(category, item) {
    const data = getStok();
    if (!data[category]) data[category] = [];
    if (stokCodeExists(item.code)) return null;
    data[category].push(item);
    saveStok(data);
    return item;
}

/* --- Maliyet hesapları (kaydedilenler listesi) --- */
function getCostCalcs() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.costCalcs)) || []; } catch { return []; }
}
function addCostCalc(record) {
    const list = getCostCalcs();
    const item = { id: nextId(list), createdAt: new Date().toISOString(), ...record };
    list.unshift(item);
    localStorage.setItem(PORTAL_KEYS.costCalcs, JSON.stringify(list));
    return item;
}
function deleteCostCalc(id) {
    localStorage.setItem(PORTAL_KEYS.costCalcs, JSON.stringify(getCostCalcs().filter(c => c.id !== id)));
}

/* --- Sipariş/Montaj/Proje durum rozeti sınıfı --- */
function statusBadgeClass(status) {
    const map = {
        'Yeni': 'p-badge-yeni',
        'Planlandı': 'p-badge-yeni',
        'Henüz Başlanmadı': 'p-badge-yeni',
        'Hazırlanıyor': 'p-badge-hazirlaniyor',
        'Sahada': 'p-badge-hazirlaniyor',
        'Devam Ediyor': 'p-badge-hazirlaniyor',
        'Tamamlandı': 'p-badge-tamamlandi',
        'Sevk Edildi': 'p-badge-tamamlandi',
        'İptal': 'p-badge-iptal'
    };
    return map[status] || 'p-badge-yeni';
}

/* --- Projeler --- */
const PROJE_STATUSES = ['Henüz Başlanmadı', 'Devam Ediyor', 'Sevk Edildi'];
function getProjeler() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.projeler)) || []; } catch { return []; }
}
function saveProjeler(list) {
    localStorage.setItem(PORTAL_KEYS.projeler, JSON.stringify(list));
}
function addProje(record) {
    const list = getProjeler();
    const item = { id: nextId(list), status: 'Henüz Başlanmadı', createdAt: new Date().toISOString(), ...record };
    list.unshift(item);
    saveProjeler(list);
    return item;
}
function updateProjeStatus(id, status) {
    const list = getProjeler();
    const item = list.find(p => p.id === id);
    if (item) { item.status = status; saveProjeler(list); }
}
function deleteProje(id) {
    saveProjeler(getProjeler().filter(p => p.id !== id));
}

/* --- Ürün Ağacı: Malzeme/Hizmet (=stok kalemleri) → Yarı Mamül → Son Ürün/Set ---
   Her seviyenin maliyeti bir alt seviyedeki bileşenlerin toplamından hesaplanır. */
function findStokItemByCode(code) {
    const data = getStok();
    for (const category of Object.keys(data)) {
        const found = (data[category] || []).find(it => it.code === code);
        if (found) return { ...found, category };
    }
    return null;
}

function getYariMamuller() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.yariMamuller)) || []; } catch { return []; }
}
function saveYariMamuller(list) {
    localStorage.setItem(PORTAL_KEYS.yariMamuller, JSON.stringify(list));
}
function addYariMamul(record) {
    const list = getYariMamuller();
    const item = { id: nextId(list), code: `YM-${nextId(list)}`, createdAt: new Date().toISOString(), ...record };
    list.unshift(item);
    saveYariMamuller(list);
    return item;
}
function deleteYariMamul(id) {
    saveYariMamuller(getYariMamuller().filter(y => y.id !== id));
}
function yariMamulCost(ym) {
    return (ym.components || []).reduce((sum, comp) => {
        const stokItem = findStokItemByCode(comp.stokCode);
        return sum + (stokItem ? (stokItem.unitCost || 0) * comp.qty : 0);
    }, 0);
}

function getSonUrunler() {
    try { return JSON.parse(localStorage.getItem(PORTAL_KEYS.sonUrunler)) || []; } catch { return []; }
}
function saveSonUrunler(list) {
    localStorage.setItem(PORTAL_KEYS.sonUrunler, JSON.stringify(list));
}
function addSonUrun(record) {
    const list = getSonUrunler();
    const item = { id: nextId(list), code: `SET-${nextId(list)}`, createdAt: new Date().toISOString(), ...record };
    list.unshift(item);
    saveSonUrunler(list);
    return item;
}
function deleteSonUrun(id) {
    saveSonUrunler(getSonUrunler().filter(s => s.id !== id));
}
function sonUrunCost(su) {
    const yariMamuller = getYariMamuller();
    return (su.components || []).reduce((sum, comp) => {
        const ym = yariMamuller.find(y => y.id === comp.yariMamulId);
        return sum + (ym ? yariMamulCost(ym) * comp.qty : 0);
    }, 0);
}

/* "Stok" kutucuğu altında toplanan alt sayfalar. Bu sayfalardan birindeyken
   sol menüde tam liste yerine sadece bu grup gösterilir. */
const STOK_HUB_PAGES = ['stok', 'stok-hareketleri', 'envanter-listesi', 'envanter'];
const STOK_HUB_NAV = [
    { key: 'stok', label: 'Stok Durumu', href: 'stok.html' },
    { key: 'stok-hareketleri', label: 'Stok Hareketleri', href: 'stok-hareketleri.html' },
    { key: 'envanter-listesi', label: 'Envanter Listesi', href: 'envanter-listesi.html' },
    { key: 'envanter', label: 'Envanter Kartı Oluştur', href: 'envanter-giris.html', adminOnly: true }
];

/* Sol menü gizle/sabitle tercihi, sayfalar arasında kalıcıdır. */
function getSidebarHidden() {
    return localStorage.getItem(PORTAL_KEYS.sidebarHidden) === 'true';
}
function applySidebarHidden(hidden) {
    const layout = document.querySelector('.portal-layout');
    if (layout) layout.classList.toggle('sidebar-hidden', hidden);
}
function setSidebarHidden(hidden) {
    localStorage.setItem(PORTAL_KEYS.sidebarHidden, hidden ? 'true' : 'false');
    applySidebarHidden(hidden);
}

function themeToggleIcon(theme) {
    // Koyu moddayken güneş (açığa geçiş), açık moddayken ay (koyuya geçiş) gösterilir.
    return theme === 'dark'
        ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
        : '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>';
}

function renderPortalChrome(activeKey, title, subtitle) {
    const sidebar = document.getElementById('portalSidebar');
    const topbar = document.getElementById('portalTopbar');

    sidebar.innerHTML = `
        <div class="portal-sidebar-header">
            <img src="../logo.jpg" alt="Fibar Hidrolik Logo">
            <span>Fibar Hidrolik<br>Personel Portalı</span>
        </div>
        <nav class="portal-nav">
            <a href="anasayfa.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                Anasayfaya Dön
            </a>
            ${STOK_HUB_PAGES.includes(activeKey) ? `
                <div class="portal-nav-group-label">Stok</div>
                ${STOK_HUB_NAV.filter(item => !item.adminOnly || isAdmin()).map(item => `
                    <a href="${item.href}" class="sub-link ${item.key === activeKey ? 'active' : ''}">${item.label}</a>
                `).join('')}
            ` : ''}
        </nav>
        <div class="portal-sidebar-footer">
            <div class="portal-user-row">
                <span>${escapeHtml(currentUser())}</span>
                <button type="button" class="portal-logout-btn" id="portalLogoutBtn">Çıkış Yap</button>
            </div>
        </div>
    `;

    const theme = getTheme();
    topbar.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <button type="button" class="portal-sidebar-toggle" id="portalSidebarToggle" aria-label="Menüyü gizle/göster" title="Menüyü gizle/göster">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
            </button>
            <button type="button" class="portal-mobile-toggle" id="portalMobileToggle" aria-label="Menüyü aç/kapat">
                <span></span><span></span><span></span>
            </button>
            <div>
                <h1>${title}</h1>
                ${subtitle ? `<p>${subtitle}</p>` : ''}
            </div>
        </div>
        <button type="button" class="portal-theme-toggle" id="portalThemeToggle" aria-label="Temayı değiştir" title="Temayı değiştir">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="portalThemeIcon">${themeToggleIcon(theme)}</svg>
        </button>
    `;

    document.getElementById('portalLogoutBtn').addEventListener('click', logout);
    const toggle = document.getElementById('portalMobileToggle');
    if (toggle) {
        toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
    document.getElementById('portalThemeToggle').addEventListener('click', () => {
        const newTheme = toggleTheme();
        document.getElementById('portalThemeIcon').innerHTML = themeToggleIcon(newTheme);
    });

    applySidebarHidden(getSidebarHidden());
    document.getElementById('portalSidebarToggle').addEventListener('click', () => {
        setSidebarHidden(!getSidebarHidden());
    });
}

/* Anasayfa gibi sol menüsüz, sade sayfalar için üst bar (logo + tema + çıkış). */
function renderMinimalTopbar(title, subtitle) {
    const topbar = document.getElementById('portalTopbar');
    const theme = getTheme();
    topbar.innerHTML = `
        <div>
            <h1>${title}</h1>
            ${subtitle ? `<p>${subtitle}</p>` : ''}
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:13.5px; color:var(--text-muted); font-weight:600;">${escapeHtml(currentUser())}</span>
            <button type="button" class="portal-theme-toggle" id="portalThemeToggle" aria-label="Temayı değiştir" title="Temayı değiştir">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="portalThemeIcon">${themeToggleIcon(theme)}</svg>
            </button>
            <button type="button" class="p-btn p-btn-ghost p-btn-sm" id="portalLogoutBtn">Çıkış Yap</button>
        </div>
    `;
    document.getElementById('portalThemeToggle').addEventListener('click', () => {
        const newTheme = toggleTheme();
        document.getElementById('portalThemeIcon').innerHTML = themeToggleIcon(newTheme);
    });
    document.getElementById('portalLogoutBtn').addEventListener('click', logout);
}

/* Her portal sayfası, içerik render edilmeden önce bunu çağırır.
   Giriş yapılmamışsa giriş ekranına yönlendirir. */
function guardPortalPage() {
    if (!isLoggedIn()) {
        window.location.replace('../portal-giris.html');
    }
}

/* Sadece admin'e özel sayfalarda guardPortalPage()'den sonra çağrılır.
   Şu an tek kullanıcı admin olduğu için pratikte hep geçer; ileride
   farklı bir kullanıcı türü eklenirse bu sayfayı otomatik kapatır. */
function requireAdmin() {
    if (!isAdmin()) {
        alert('Bu sayfaya yalnızca admin erişebilir.');
        window.location.href = 'anasayfa.html';
    }
}
