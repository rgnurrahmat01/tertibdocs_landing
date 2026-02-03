// Translation system for TertibDocs landing pages
// Supports Indonesian (ID) and English (EN)

const translations = {
    id: {
        // Navigation
        'nav.features': 'Fitur',
        'nav.usecases': 'Use Cases',
        'nav.how': 'Cara Kerja',
        'nav.start': 'Mulai',
        'nav.home': 'Beranda',
        'nav.checklist': 'Checklist',
        'nav.issues': 'Masalah Umum',

        // Hero - Landing Page
        'hero.pill': 'Verifikasi dokumen, bukan drama',
        'hero.title': 'Rapikan dokumen sebelum sengketa membesar.',
        'hero.subtitle': 'TertibDocs membantu tim legal, finance, dan operasional menjaga kontrak tetap tertib, lengkap, dan siap audit dalam hitungan menit.',
        'hero.cta.primary': 'Mulai verifikasi',
        'hero.cta.secondary': 'Lihat cara kerja',
        'hero.stat1.title': '3 menit',
        'hero.stat1.desc': 'Ringkas risiko utama',
        'hero.stat2.title': '3 kategori',
        'hero.stat2.desc': 'Track verifikasi sesuai jalur anda',
        'hero.stat3.title': 'ODR-ready',
        'hero.stat3.desc': 'Negosiasi jika diperlukan',

        // Problem section
        'problem.title': 'Masalah yang Sering Terjadi',
        'problem.subtitle': 'Dokumen yang tidak lengkap atau inkonsisten dapat menyebabkan kerugian besar',

        // Solution section
        'solution.title': 'Solusi TertibDocs',
        'solution.subtitle': 'Cegah masalah sebelum terlambat dengan verifikasi otomatis',

        // Niches section
        'niches.pill': '3 jalur verifikasi',
        'niches.title': 'Pilih kategori dokumen Anda',
        'niches.subtitle': 'Setiap jalur punya checklist dan laporan yang disesuaikan',
        'niches.learn': 'Pelajari Lebih Lanjut',

        // Features section
        'features.title': 'Fitur Unggulan',
        'features.subtitle': 'Teknologi canggih untuk verifikasi dokumen yang akurat',

        // How it works
        'how.title': 'Cara Kerja',
        'how.subtitle': 'Hanya 4 langkah sederhana untuk dokumen yang tertib',

        // CTA
        'cta.title': 'Siap Merapikan Dokumen Anda?',
        'cta.subtitle': 'Mulai verifikasi gratis dan cegah sengketa sebelum terlambat',
        'cta.primary': 'Mulai Verifikasi Gratis',
        'cta.secondary': 'Hubungi Sales',

        // Footer
        'footer.disclaimer': 'TertibDocs tidak memberikan nasihat hukum. Platform ini hanya untuk verifikasi dokumen dan pencegahan sengketa.',
        'footer.copyright': '2026 TertibDocs. All rights reserved. Made with ❤️ for Indonesian businesses.',
        'footer.contact': 'Kontak',

        // Trade Page
        'trade.hero.pill': 'Jalur 1: Trade & Perdagangan',
        'trade.hero.title': 'Verifikasi Dokumen Ekspor-Impor Sebelum Pengiriman',
        'trade.hero.subtitle': 'Cegah penolakan di bea cukai, pembayaran tertunda, dan masalah shipping dengan verifikasi dokumen ekspor yang komprehensif. TertibDocs memastikan kontrak, invoice, dan shipping docs Anda lengkap dan konsisten.',
        'trade.hero.cta.primary': 'Mulai Verifikasi Export',
        'trade.hero.cta.secondary': 'Lihat Checklist Lengkap',

        // Project Page
        'project.hero.pill': 'Jalur 3: Project & Konstruksi',
        'project.hero.title': 'Verifikasi Dokumen Kontrak Konstruksi & Klaim',
        'project.hero.subtitle': 'Cegah penolakan klaim EOT, variasi order yang tidak sah, dan konflik pembayaran dengan verifikasi dokumen konstruksi yang komprehensif. TertibDocs memastikan kontrak, variation order, dan claims Anda lengkap dan terdokumentasi dengan benar.',
        'project.hero.cta.primary': 'Mulai Verifikasi Proyek',
        'project.hero.cta.secondary': 'Lihat Checklist Lengkap',
    },
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.usecases': 'Use Cases',
        'nav.how': 'How It Works',
        'nav.start': 'Get Started',
        'nav.home': 'Home',
        'nav.checklist': 'Checklist',
        'nav.issues': 'Common Issues',

        // Hero - Landing Page
        'hero.pill': 'Document verification, not drama',
        'hero.title': 'Organize documents before disputes escalate.',
        'hero.subtitle': 'TertibDocs helps legal, finance, and operations teams keep contracts organized, complete, and audit-ready in minutes.',
        'hero.cta.primary': 'Start verification',
        'hero.cta.secondary': 'See how it works',
        'hero.stat1.title': '3 minutes',
        'hero.stat1.desc': 'Summarize key risks',
        'hero.stat2.title': '3 categories',
        'hero.stat2.desc': 'Track verification by category',
        'hero.stat3.title': 'ODR-ready',
        'hero.stat3.desc': 'Negotiate if needed',

        // Problem section
        'problem.title': 'Common Problems',
        'problem.subtitle': 'Incomplete or inconsistent documents can cause major losses',

        // Solution section
        'solution.title': 'TertibDocs Solution',
        'solution.subtitle': 'Prevent issues before it\'s too late with automated verification',

        // Niches section
        'niches.pill': '3 verification tracks',
        'niches.title': 'Choose Your Document Category',
        'niches.subtitle': 'Each track has customized checklists and reports',
        'niches.learn': 'Learn More',

        // Features section
        'features.title': 'Key Features',
        'features.subtitle': 'Advanced technology for accurate document verification',

        // How it works
        'how.title': 'How It Works',
        'how.subtitle': 'Just 4 simple steps for organized documents',

        // CTA
        'cta.title': 'Ready to Organize Your Documents?',
        'cta.subtitle': 'Start free verification and prevent disputes before it\'s too late',
        'cta.primary': 'Start Free Verification',
        'cta.secondary': 'Contact Sales',

        // Footer
        'footer.disclaimer': 'TertibDocs does not provide legal advice. This platform is for document verification and dispute prevention only.',
        'footer.copyright': '2026 TertibDocs. All rights reserved. Made with ❤️ for businesses worldwide.',
        'footer.contact': 'Contact',

        // Trade Page
        'trade.hero.pill': 'Track 1: Trade & Commerce',
        'trade.hero.title': 'Verify Export-Import Documents Before Shipment',
        'trade.hero.subtitle': 'Prevent customs rejection, payment delays, and shipping issues with comprehensive export document verification. TertibDocs ensures your contracts, invoices, and shipping docs are complete and consistent.',
        'trade.hero.cta.primary': 'Start Export Verification',
        'trade.hero.cta.secondary': 'View Complete Checklist',

        // Project Page  
        'project.hero.pill': 'Track 3: Project & Construction',
        'project.hero.title': 'Verify Construction Contract & Claims Documentation',
        'project.hero.subtitle': 'Prevent EOT claim rejection, unauthorized variations, and payment disputes with comprehensive construction document verification. TertibDocs ensures your contracts, variation orders, and claims are complete and properly documented.',
        'project.hero.cta.primary': 'Start Project Verification',
        'project.hero.cta.secondary': 'View Complete Checklist',
    }
};

// Get current language from localStorage or default to 'id'
function getCurrentLanguage() {
    return localStorage.getItem('tertibdocs_lang') || 'id';
}

// Set language and save to localStorage
function setLanguage(lang) {
    localStorage.setItem('tertibdocs_lang', lang);
    updatePageLanguage(lang);
}

// Get translated text
function t(key, fallback = '') {
    const lang = getCurrentLanguage();
    return translations[lang][key] || fallback || key;
}

// Update all elements with data-i18n attribute
function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translatedText = translations[lang][key];
        if (translatedText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translatedText;
            } else {
                el.textContent = translatedText;
            }
        }
    });

    // Update language toggle buttons
    updateLanguageToggle(lang);
}

// Update language toggle button states
function updateLanguageToggle(lang) {
    const idBtn = document.getElementById('lang-id');
    const enBtn = document.getElementById('lang-en');

    if (idBtn && enBtn) {
        if (lang === 'id') {
            idBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            enBtn.classList.add('active');
            idBtn.classList.remove('active');
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);

    // Setup language toggle buttons
    const idBtn = document.getElementById('lang-id');
    const enBtn = document.getElementById('lang-en');

    if (idBtn) {
        idBtn.addEventListener('click', () => setLanguage('id'));
    }
    if (enBtn) {
        enBtn.addEventListener('click', () => setLanguage('en'));
    }
});

// Export for use in script
window.TertibI18n = {
    t,
    setLanguage,
    getCurrentLanguage
};
