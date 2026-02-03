// Translation system for TertibDocs landing pages
// Supports Indonesian (ID) and English (EN)
// Full translation coverage for all content

const translations = {
    id: {
        // === NAVIGATION ===
        'nav.features': 'Fitur',
        'nav.usecases': 'Use Cases',
        'nav.how': 'Cara Kerja',
        'nav.start': 'Mulai',
        'nav.home': 'Beranda',
        'nav.checklist': 'Checklist',
        'nav.issues': 'Masalah Umum',

        // === LANDING PAGE (index.html) ===

        // Hero Section
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

        // Problem Section
        'problem.pill': 'Masalah Umum',
        'problem.title': 'Masalah yang Sering Terjadi',
        'problem.subtitle': 'Dokumen yang tidak lengkap atau inkonsisten dapat menyebabkan kerugian besar',
        'problem.card1.title': 'Pengiriman Ditolak',
        'problem.card1.desc': 'Dokumen ekspor-impor tidak sesuai dengan kontrak atau invoice, menyebabkan barang ditahan di bea cukai.',
        'problem.card2.title': 'Pembayaran Gagal',
        'problem.card2.desc': 'Klien menolak bayar karena invoice tidak cocok dengan perjanjian atau bukti pengiriman hilang.',
        'problem.card3.title': 'Klaim Tidak Valid',
        'problem.card3.desc': 'Claim proyek konstruksi ditolak karena variasi order atau notice tidak terdokumentasi dengan benar.',

        // Solution Section
        'solution.title': 'Solusi TertibDocs',
        'solution.subtitle': 'Cegah masalah sebelum terlambat dengan verifikasi otomatis',
        'solution.item1.title': 'Verifikasi Kelengkapan Dokumen',
        'solution.item1.desc': 'Sistem kami memeriksa apakah semua dokumen yang diperlukan sudah ada sesuai dengan jenis transaksi Anda.',
        'solution.item2.title': 'Deteksi Inkonsistensi',
        'solution.item2.desc': 'Bandingkan otomatis data kunci seperti jumlah, tanggal, pihak, dan syarat pembayaran antar dokumen.',
        'solution.item3.title': 'Laporan Gap Analysis',
        'solution.item3.desc': 'Terima rekomendasi spesifik untuk memperbaiki dokumentasi sebelum sengketa terjadi.',
        'solution.item4.title': 'Negosiasi Terstruktur',
        'solution.item4.desc': 'Jika ada masalah, selesaikan dengan ruang negosiasi built-in, bahkan eskalasi ke mediasi jika diperlukan.',

        // Niches Section
        'niches.pill': 'Jalur 2',
        'niches.title': 'Pilih kategori dokumen Anda',
        'niches.subtitle': 'Setiap jalur punya checklist dan laporan yang disesuaikan',
        'niches.learn': 'Pelajari Lebih Lanjut',
        'niches.trade.title': 'Trade / Perdagangan',
        'niches.trade.desc': 'Untuk bisnis ekspor-impor, sales contract, dan shipping documents',
        'niches.trade.item1': '✓ Kontrak jual-beli ada',
        'niches.trade.item2': '✓ Incoterms lengkap & versioned',
        'niches.trade.item3': '✓ Invoice cocok dengan kontrak',
        'niches.trade.item4': '✓ Dokumen pengiriman lengkap',
        'niches.trade.item5': '✓ Syarat pembayaran selaras',
        'niches.project.title': 'Project / Konstruksi',
        'niches.project.desc': 'Untuk kontrak konstruksi, variation orders, dan claims',
        'niches.project.item1': '✓ Kontrak utama lengkap',
        'niches.project.item2': '✓ Variation order terdokumentasi',
        'niches.project.item3': '✓ Notice disampaikan tepat waktu',
        'niches.project.item4': '✓ Sertifikat pembayaran konsisten',
        'niches.project.item5': '✓ Klaim tersubstansiasi dengan baik',
        'niches.personal.title': 'Personal / Keluarga',
        'niches.personal.desc': 'Untuk family business, pinjaman personal, dan partnership informal',
        'niches.personal.item1': '✓ Perjanjian tertulis ada',
        'niches.personal.item2': '✓ Wewenang terdokumentasi',
        'niches.personal.item3': '✓ Bukti aliran uang',
        'niches.personal.item4': '✓ Exit clause ada',

        // Features Section
        'features.pill': 'Teknologi',
        'features.title': 'Fitur Unggulan',
        'features.subtitle': 'Teknologi canggih untuk verifikasi dokumen yang akurat',
        'features.card1.title': '🤖 Klasifikasi Otomatis',
        'features.card1.desc': 'Upload PDF, gambar, atau chat export. Sistem kami otomatis mengenali tipe dokumen (contract, invoice, shipping docs, dll).',
        'features.card2.title': '📝 Ekstraksi Key Terms',
        'features.card2.desc': 'AI ekstrak data penting: nama pihak, jumlah, tanggal, syarat pembayaran, dan klausul kritis lainnya.',
        'features.card3.title': '✅ Checklist Engine',
        'features.card3.desc': 'Deterministic validation: setiap item diberi status PASS, WARN, atau FAIL berdasarkan rules yang jelas.',
        'features.card4.title': '📄 Laporan PDF',
        'features.card4.desc': 'Download verification report lengkap dengan missing document list dan inconsistency log.',
        'features.card5.title': '🔐 Keamanan Data',
        'features.card5.desc': 'Local-first RAG - data Anda tidak bocor ke cloud pihak ketiga. Audit log append-only untuk compliance.',
        'features.card6.title': '⚖️ ODR Lite',
        'features.card6.desc': 'Ruang negosiasi untuk settlement. Eskalasi ke mediasi dan neutral appointment jika diperlukan.',


        // Tech Section
        'tech.title': 'Teknologi Modern, Dibuat untuk Indonesia',
        'tech.subtitle': 'Backend dan frontend state-of-the-art',
        'tech.stack.title': 'Tech Stack',
        'tech.feature1.title': 'Bahasa Indonesia First',
        'tech.feature1.desc': 'UI dan laporan mendukung Bahasa Indonesia dan English.',
        'tech.feature2.title': 'Data Privacy',
        'tech.feature2.desc': 'Local-first RAG, no external data leakage. Audit log untuk compliance.',

        // How It Works
        'how.pill': 'Proses',
        'how.title': 'Cara Kerja',
        'how.subtitle': 'Hanya 4 langkah sederhana untuk dokumen yang tertib',
        'how.step1.title': 'Upload Dokumen',
        'how.step1.desc': 'Upload kontrak, invoice, email, dan dokumen pendukung lainnya.',
        'how.step2.title': 'Verifikasi Otomatis',
        'how.step2.desc': 'Sistem akan klasifikasi, ekstrak data, dan jalankan checklist sesuai jalur Anda.',
        'how.step3.title': 'Review Laporan',
        'how.step3.desc': 'Tinjau temuan, gap analysis, dan rekomendasi perbaikan.',
        'how.step4.title': 'Export & Negosiasi',
        'how.step4.desc': 'Download laporan PDF atau mulai proses negosiasi jika diperlukan.',

        // CTA Section
        'cta.title': 'Siap Merapikan Dokumen Anda?',
        'cta.subtitle': 'Mulai verifikasi gratis dan cegah sengketa sebelum terlambat',
        'cta.primary': 'Mulai Verifikasi Gratis',
        'cta.secondary': 'Hubungi Sales',
        'cta.whatsapp_link': 'https://wa.me/6281388889818?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%TertibDocs',

        // Footer
        'footer.disclaimer': 'TertibDocs tidak memberikan nasihat hukum. Platform ini hanya untuk verifikasi dokumen dan pencegahan sengketa.',
        'footer.copyright': '2026 TertibDocs. All rights reserved. Made with ❤️ for Indonesian businesses.',
        'footer.contact': 'Kontak',
        'footer.privacy': 'Kebijakan Privasi',
        'footer.terms': 'Syarat & Ketentuan',

        // === TRADE PAGE (trade.html) ===

        // Hero
        'trade.hero.pill': 'Jalur 1',
        'trade.hero.title': 'Verifikasi Dokumen Ekspor-Impor Sebelum Pengiriman',
        'trade.hero.subtitle': 'Cegah penolakan di bea cukai, pembayaran tertunda, dan masalah shipping dengan verifikasi dokumen ekspor yang komprehensif. TertibDocs memastikan kontrak, invoice, dan shipping docs Anda lengkap dan konsisten.',
        'trade.hero.cta.primary': 'Mulai Verifikasi Export',
        'trade.hero.cta.secondary': 'Lihat Checklist Lengkap',

        // Why Matters
        'trade.why.pill': 'Kenapa Penting?',
        'trade.why.title': 'Risiko Dokumen Ekspor Tidak Lengkap',
        'trade.why.subtitle': 'Kesalahan dokumentasi ekspor bisa berakibat barang ditahan dan kerugian jutaan rupiah',

        // Common Issues
        'trade.issues.pill': 'Problem Prevention',
        'trade.issues.title': '5 Masalah Ekspor Paling Sering',
        'trade.issues.subtitle': 'Dan bagaimana TertibDocs mencegahnya',

        // Checklist
        'trade.checklist.pill': 'Comprehensive Checklist',
        'trade.checklist.title': 'Dokumen Ekspor yang Kami Verifikasi',
        'trade.checklist.subtitle': 'Checklist lengkap untuk ekspor yang aman dan tertib',

        // Incoterms
        'trade.incoterms.pill': 'Incoterms Compliance',
        'trade.incoterms.title': 'Verifikasi Kecocokan dengan Incoterms',
        'trade.incoterms.desc': 'Kami pastikan dokumen Anda sesuai dengan Incoterms yang disepakati',
        'trade.incoterms.check': 'Yang kami cek:',

        // How It Works
        'trade.how.pill': 'Proses Verifikasi',
        'trade.how.title': 'Cara Kerja TertibDocs untuk Ekspor',
        'trade.how.subtitle': '4 langkah mudah untuk dokumen ekspor yang tertib',
        'trade.how.step1.title': 'Upload Dokumen Export',
        'trade.how.step1.desc': 'Kumpulkan kontrak, invoice, chat, dan bukti pembayaran.',
        'trade.how.step2.title': 'AI Extract Data',
        'trade.how.subtitle': '4 langkah mudah untuk dokumen ekspor yang aman',
        'trade.how.step1.title': 'Upload Dokumen Ekspor',
        'trade.how.step1.desc': 'Contracts, Invoice, Packing List, B/L, COO, Insurance.',
        'trade.how.step2.title': 'AI Ekstrak Data',
        'trade.how.step2.desc': 'AI extract parties, amount, quantity, dates, Incoterms, HS Code.',
        'trade.how.step3.title': 'Checklist Verification',
        'trade.how.step3.desc': 'Cross-check konsistensi data, validasi Incoterms, cek compliance L/C.',
        'trade.how.step4.title': 'Download Laporan',
        'trade.how.step4.desc': 'Dapatkan laporan PDF dengan status PASS/WARN/FAIL dan action items.',

        // Sample Output
        'trade.sample.pill': 'Contoh Output',
        'trade.sample.title': 'Contoh Laporan Verifikasi Ekspor',
        'trade.sample.report_title': 'Verification Report - Export to Singapore',
        'trade.sample.pass1': 'Commercial Invoice matches Purchase Order (amount, quantity, description)',
        'trade.sample.pass2': 'Packing List weight (1,234 kg) matches B/L (1,234 kg)',
        'trade.sample.warn1': 'Certificate of Origin expires in 7 days (2026-02-10). Consider renewing before shipment.',
        'trade.sample.fail1': 'Consignee name in B/L ("ABC Trading Pte Ltd") does not match Invoice ("ABC Trading Pte. Ltd.")',
        'trade.sample.fail2': 'Missing Insurance Certificate (required for CIF Incoterms)',
        'trade.sample.rec': 'Recommended Actions:',
        'trade.sample.act1': 'Fix consignee name in B/L to exactly match Invoice',
        'trade.sample.act2': 'Obtain Insurance Certificate from freight forwarder',

        // CTA
        'trade.cta.title': 'Siap Verifikasi Dokumen Ekspor Anda?',
        'trade.cta.subtitle': 'Upload dokumen sekarang dan dapatkan laporan verifikasi dalam hitungan menit',
        'trade.cta.primary': 'Mulai Verifikasi Export',
        'trade.cta.secondary': 'Hubungi Sales untuk Demo',
        'trade.cta.whatsapp_link': 'https://wa.me/6281388889818?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%TertibDocs%20Ekspor',
        'trade.footer.disclaimer': 'TertibDocs tidak memberikan nasihat hukum atau customs brokerage. Platform ini hanya untuk verifikasi dokumen dan pencegahan masalah ekspor.',

        // === PROJECT PAGE (project.html) ===

        // Project Page
        'project.hero.pill': 'Jalur 3',
        'project.hero.title': 'Verifikasi Dokumen Kontrak Konstruksi & Klaim',
        'project.hero.subtitle': 'Cegah penolakan klaim EOT, variasi order yang tidak sah, dan konflik pembayaran dengan verifikasi dokumen konstruksi yang komprehensif. TertibDocs memastikan kontrak, variation order, dan claims Anda lengkap dan terdokumentasi dengan benar.',
        'project.hero.cta.primary': 'Mulai Verifikasi Proyek',
        'project.hero.cta.secondary': 'Lihat Checklist Lengkap',

        // Project - Why Matters
        'project.why.pill': 'Kenapa Penting?',
        'project.why.title': 'Risiko Dokumen Konstruksi Tidak Lengkap',
        'project.why.subtitle': 'Kesalahan dokumentasi proyek konstruksi bisa berakibat klaim ditolak dan kerugian miliaran rupiah',
        // Checklist
        'project.checklist.pill': 'Comprehensive Checklist',
        'project.checklist.title': 'Dokumen Konstruksi yang Kami Verifikasi',
        'project.checklist.subtitle': 'Checklist lengkap untuk proyek konstruksi yang aman dan tertib',

        // Common Issues
        'project.issues.pill': 'Problem Prevention',
        'project.issues.title': '7 Masalah Konstruksi Paling Sering',
        'project.issues.subtitle': 'Dan bagaimana TertibDocs mencegahnya',

        // How It Works
        'project.how.pill': 'Proses Verifikasi',
        'project.how.title': 'Cara Kerja TertibDocs untuk Konstruksi',
        'project.how.subtitle': '4 langkah mudah untuk dokumen konstruksi yang tertib',
        'project.how.step1.title': 'Upload Dokumen Proyek Anda',
        'project.how.step1.desc': 'Upload Contract, VI/VO, Notices, Claims, Payment Certificates, Programme, photos, dan semua dokumen terkait. Sistem auto-classify berdasarkan tipe dokumen.',
        'project.how.step2.title': 'AI Ekstrak Data Kontrak',
        'project.how.step2.desc': 'AI extract contract dates, time bars, notice requirements, payment terms, LD rates, retention %, parties, dan semua data critical dari kontrak dan supporting docs.',
        'project.how.step3.title': 'Checklist Compliance',
        'project.how.step3.desc': 'Sistem verify compliance dengan contract requirements: notice deadlines met, VI properly authorized, claims properly substantiated, payment calculations correct, time bar compliance.',
        'project.how.step4.title': 'Download Laporan & Flag Risks',
        'project.how.step4.desc': 'Dapatkan report dengan status PASS/WARN/FAIL untuk setiap requirement. Lengkap dengan action items untuk strengthen claims atau fix documentation gaps.',

        // Sample Output
        'project.sample.pill': 'Contoh Output',
        'project.sample.title': 'Contoh Laporan Verifikasi Konstruksi',

        // Contract Forms
        'project.forms.pill': 'Contract Standards',
        'project.forms.title': 'Mendukung Berbagai Standard Form Contract',

        // CTA
        'project.cta.title': 'Siap Verifikasi Dokumen Konstruksi Anda?',
        'project.cta.subtitle': 'Upload dokumen proyek sekarang dan pastikan claims dan payments Anda solid',
        'project.cta.primary': 'Mulai Verifikasi Proyek',
        'project.cta.secondary': 'Hubungi Sales untuk Demo',
        'project.cta.whatsapp_link': 'https://wa.me/628122067494?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%TertibDocs%20Konstruksi',
    },

    en: {
        // === NAVIGATION ===
        'nav.features': 'Features',
        'nav.usecases': 'Use Cases',
        'nav.how': 'How It Works',
        'nav.start': 'Get Started',
        'nav.home': 'Home',
        'nav.checklist': 'Checklist',
        'nav.issues': 'Common Issues',

        // === LANDING PAGE (index.html) ===

        // Hero Section
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

        // Problem Section
        'problem.pill': 'Common Problems',
        'problem.title': 'Frequent Issues',
        'problem.subtitle': 'Incomplete or inconsistent documents can cause major losses',
        'problem.card1.title': 'Shipment Rejected',
        'problem.card1.desc': 'Export-import documents mismatched with contract or invoice, causing customs detention.',
        'problem.card2.title': 'Payment Failed',
        'problem.card2.desc': 'Client refuses payment due to invoice mismatch or missing delivery proof.',
        'problem.card3.title': 'Invalid Claims',
        'problem.card3.desc': 'Construction claims rejected due to undocumented variation orders or notices.',

        // Solution Section
        'solution.title': 'TertibDocs Solution',
        'solution.subtitle': 'Prevent problems before it\'s too late with automated verification',
        'solution.item1.title': 'Document Completeness Verification',
        'solution.item1.desc': 'Our system checks if all required documents are present and properly formatted.',
        'solution.item2.title': 'Automated Consistency Check',
        'solution.item2.desc': 'Cross-reference data across documents to detect mismatches in names, amounts, dates.',
        'solution.item3.title': 'Gap Analysis & Recommendations',
        'solution.item3.desc': 'Get actionable recommendations to strengthen your documentation before disputes arise.',
        'solution.item4.title': 'Structured Negotiation',
        'solution.item4.desc': 'If issues arise, resolve them with built-in negotiation rooms, or escalate to mediation if needed.',

        // Niches Section
        'niches.pill': 'Track 2',
        'niches.title': 'Choose Your Document Category',
        'niches.subtitle': 'Each track has customized checklists and reports',
        'niches.learn': 'Learn More',
        'niches.trade.title': 'Trade / Commerce',
        'niches.trade.desc': 'For export-import business, sales contracts, and shipping documents',
        'niches.trade.item1': '✓ Sales contract present',
        'niches.trade.item2': '✓ Incoterms complete & versioned',
        'niches.trade.item3': '✓ Invoice matches contract',
        'niches.trade.item4': '✓ Shipping documents complete',
        'niches.trade.item5': '✓ Payment terms aligned',
        'niches.personal.title': 'Personal / Family',
        'niches.personal.desc': 'For family business, personal loans, and informal partnerships',
        'niches.personal.item1': '✓ Written agreement exists',
        'niches.personal.item2': '✓ Authority documented',
        'niches.personal.item3': '✓ Money trail evidence',
        'niches.personal.item4': '✓ Exit clause present',
        'niches.project.title': 'Project / Construction',
        'niches.project.desc': 'For construction contracts, variation orders, and claims',
        'niches.project.item1': '✓ Main contract complete',
        'niches.project.item2': '✓ Variation orders documented',
        'niches.project.item3': '✓ Notices submitted on time',
        'niches.project.item4': '✓ Payment certificates consistent',
        'niches.project.item5': '✓ Claims properly substantiated',

        // Features Section
        'features.pill': 'Technology',
        'features.title': 'Key Features',
        'features.subtitle': 'Advanced technology for accurate document verification',
        'features.card1.title': '🤖 Automatic Classification',
        'features.card1.desc': 'Upload PDFs, images, or chat exports. Our system automatically recognizes document types (contract, invoice, shipping docs, etc).',
        'features.card2.title': '📝 Key Terms Extraction',
        'features.card2.desc': 'AI extracts parties, amounts, dates, terms, Incoterms, and other critical data points.',
        'features.card3.title': '✅ Smart Checklist Engine',
        'features.card3.desc': 'Customized checklist engine per niche. Verify completeness, consistency, and compliance.',
        'features.card4.title': '📊 Gap Analysis Report',
        'features.card4.desc': 'Get detailed reports with PASS/WARN/FAIL status and recommended actions.',
        'features.card5.title': '🔐 Data Security',
        'features.card5.desc': 'Local-first RAG - your data does not leak to third-party clouds. Append-only audit log for compliance.',
        'features.card6.title': '⚖️ ODR Lite',
        'features.card6.desc': 'Negotiation room for settlement. Escalation to mediation and neutral appointment if needed.',

        // How It Works
        'how.pill': 'Process',
        'how.title': 'How It Works',
        'how.subtitle': 'Just 4 simple steps for organized documents',
        'how.step1.title': 'Upload Documents',
        'how.step1.desc': 'Upload contracts, invoices, emails, and other supporting documents.',
        'how.step2.title': 'Automated Verification',
        'how.step2.desc': 'System will classify, extract data, and run checklist according to your track.',
        'how.step3.title': 'Review Report',
        'how.step3.desc': 'Review findings, gap analysis, and improvement recommendations.',
        'how.step4.title': 'Export & Negotiate',
        'how.step4.desc': 'Download PDF report or start negotiation process if needed.',

        // CTA Section
        'cta.title': 'Ready to Organize Your Documents?',
        'cta.subtitle': 'Start free verification and prevent disputes before it\'s too late',
        'cta.primary': 'Start Free Verification',
        'cta.secondary': 'Contact Sales',
        'cta.whatsapp_link': 'https://wa.me/6281388889818?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%TertibDocs',

        // Tech Section
        'tech.title': 'Modern Technology, Built for Indonesia',
        'tech.subtitle': 'State-of-the-art backend and frontend',
        'tech.stack.title': 'Tech Stack',
        'tech.feature1.title': 'Bahasa Indonesia First',
        'tech.feature1.desc': 'UI and reports support both Indonesian and English.',
        'tech.feature2.title': 'Data Privacy',
        'tech.feature2.desc': 'Local-first RAG, no external data leakage. Audit log for compliance.',

        // Footer
        'footer.disclaimer': 'TertibDocs does not provide legal advice. This platform is for document verification and dispute prevention only.',
        'footer.copyright': '2026 TertibDocs. All rights reserved. Made with ❤️ for businesses worldwide.',
        'footer.contact': 'Contact',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',

        // === TRADE PAGE (trade.html) ===

        // Trade Page
        'trade.hero.pill': 'Track 1',
        'trade.hero.title': 'Verify Export-Import Documents Before Shipment',
        'trade.hero.subtitle': 'Prevent customs rejection, payment delays, and shipping issues with comprehensive export document verification. TertibDocs ensures your contracts, invoices, and shipping docs are complete and consistent.',
        'trade.hero.cta.primary': 'Start Export Verification',
        'trade.hero.cta.secondary': 'View Complete Checklist',

        // Trade - Why Matters
        'trade.why.pill': 'Why It Matters?',
        'trade.why.title': 'Risks of Incomplete Export Documentation',
        'trade.why.subtitle': 'Export documentation errors can result in goods being held and millions in losses',
        'trade.why.card1.title': 'Customs Detention',
        'trade.why.card1.desc': 'Goods held at customs due to mismatched documents or invoice discrepancies with packing list. Storage fees accumulate daily.',
        'trade.why.card2.title': 'L/C Payment Rejection',
        'trade.why.card2.desc': 'Bank refuses payment due to minor discrepancies - wrong date, name typo, or missing signature.',
        'trade.why.card3.title': 'Incoterms Non-Compliance',
        'trade.why.card3.desc': 'Documents inconsistent with agreed Incoterms (FOB, CIF, DDP). Unclear liability for costs.',

        // Trade - Checklist
        'trade.checklist.pill': 'Comprehensive Checklist',
        'trade.checklist.title': 'Export Documents We Verify',
        'trade.checklist.subtitle': 'Complete checklist for safe and organized exports',

        // Checklist items
        'trade.check.contract.title': '1. Core Contract Documents',
        'trade.check.contract.item1': 'Sales Contract / Purchase Order',
        'trade.check.contract.item1.desc': 'Buyer/seller names match, description complete, quantity, unit price, total amount, payment terms, Incoterms, destination port.',
        'trade.check.contract.item2': 'Proforma Invoice (if any)',
        'trade.check.contract.item2.desc': 'Matches final invoice, quoted price unchanged without addendum',

        'trade.check.financial.title': '2. Financial Documents',
        'trade.check.financial.item1': 'Commercial Invoice',
        'trade.check.financial.item1.desc': 'Invoice number, date, full address, goods description matches PO, HS Code, quantity, unit price, total, Incoterms.',
        'trade.check.financial.item2': 'Packing List',
        'trade.check.financial.item2.desc': 'Total packages, nett weight, gross weight, volume/CBM, marks/numbers match B/L',
        'trade.check.financial.item3': 'Letter of Credit (L/C)',
        'trade.check.financial.item3.desc': 'All L/C terms met, no discrepancies, presented docs match L/C requirements',

        'trade.check.logistics.title': '3. Shipping & Logistics Documents',
        'trade.check.logistics.item1': 'Bill of Lading / AWB',
        'trade.check.logistics.item1.desc': 'Consignee, notify party, ports, freight status, shipped on board date, container numbers match packing list.',
        'trade.check.logistics.item2': 'Certificate of Origin (COO)',
        'trade.check.logistics.item2.desc': 'Country of origin, matches invoice, authorized by Chamber of Commerce.',
        'trade.check.logistics.item3': 'Insurance Certificate',
        'trade.check.logistics.item3.desc': 'Coverage amount (110% of invoice), insured party, voyage details (if CIF/CIP).',

        'trade.check.compliance.title': '4. Compliance & Quality Documents',
        'trade.check.compliance.item1': 'Inspection Certificate',
        'trade.check.compliance.item1.desc': 'Quality inspection, quantity inspection, or pre-shipment inspection by surveyor.',
        'trade.check.compliance.item2': 'Phytosanitary / Health Cert',
        'trade.check.compliance.item2.desc': 'For agricultural products, food, or animals.',

        // Trade - Incoterms
        'trade.incoterms.pill': 'Incoterms Compliance',
        'trade.incoterms.title': 'Incoterms Compliance Verification',
        'trade.incoterms.desc': 'We ensure your documents match the agreed Incoterms',
        'trade.incoterms.check': 'What we check:',

        // Trade - Issues
        'trade.issues.pill': 'Problem Prevention',
        'trade.issues.title': '5 Most Common Export Issues',
        'trade.issues.subtitle': 'And how TertibDocs prevents them',
        'trade.issue1.title': 'L/C Discrepancies',
        'trade.issue1.problem': 'Bank refuses payment because name, date, or amount doesn not exactly match L/C terms.',
        'trade.issue1.sol': 'Automated cross-check between L/C terms vs presented docs. Detects even small typos.',
        'trade.issue2.title': 'Wrong/Vague HS Code',
        'trade.issue2.problem': 'Customs rejects due to HS Code mismatch or being too general.',
        'trade.issue2.sol': 'Flag if HS Code is < 6 digits or inconsistent between invoice and customs declaration.',
        'trade.issue3.title': 'Weight/Volume Mismatch',
        'trade.issue3.problem': 'Packing list says 1000kg, B/L says 1200kg. Customs suspects fraud.',
        'trade.issue3.sol': 'Verify consistency of weight/volume/CBM across packing list, invoice, and B/L.',

        // Trade - How It Works
        'trade.how.pill': 'Verification Process',
        'trade.how.title': 'How TertibDocs Works for Exports',
        'trade.how.subtitle': '4 easy steps for secure export documentation',
        'trade.how.step1.title': 'Upload Export Documents',
        'trade.how.step1.desc': 'Contracts, Invoice, Packing List, B/L, COO, Insurance.',
        'trade.how.step2.title': 'AI Data Extraction',
        'trade.how.step2.desc': 'AI extracts parties, amount, quantity, dates, Incoterms, HS Code.',
        'trade.how.step3.title': 'Checklist Verification',
        'trade.how.step3.desc': 'Cross-check consistency, validate Incoterms, check L/C compliance.',
        'trade.how.step4.title': 'Download Report',
        'trade.how.step4.desc': 'Get PDF report with PASS/WARN/FAIL status and action items.',

        // Trade - Sample Output
        'trade.sample.pill': 'Sample Output',
        'trade.sample.title': 'Sample Export Verification Report',
        'trade.sample.report_title': 'Verification Report - Export to Singapore',
        'trade.sample.pass1': 'Commercial Invoice matches Purchase Order (amount, quantity, description)',
        'trade.sample.pass2': 'Packing List weight (1,234 kg) matches B/L (1,234 kg)',
        'trade.sample.warn1': 'Certificate of Origin expires in 7 days (2026-02-10). Consider renewing before shipment.',
        'trade.sample.fail1': 'Consignee name in B/L ("ABC Trading Pte Ltd") does not match Invoice ("ABC Trading Pte. Ltd.")',
        'trade.sample.fail2': 'Missing Insurance Certificate (required for CIF Incoterms)',
        'trade.sample.rec': 'Recommended Actions:',
        'trade.sample.act1': 'Fix consignee name in B/L to exactly match Invoice',
        'trade.sample.act2': 'Obtain Insurance Certificate from freight forwarder',

        // Trade - CTA & Footer
        'trade.cta.title': 'Ready to Verify Your Export Documents?',
        'trade.cta.subtitle': 'Upload documents now and get verification report in minutes',
        'trade.cta.primary': 'Start Export Verification',
        'trade.cta.secondary': 'Contact Sales for Demo',
        'trade.cta.whatsapp_link': 'https://wa.me/966504183224?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20EXPORTS%20TertibDocs',
        'trade.footer.disclaimer': 'TertibDocs does not provide legal advice or customs brokerage. Platform is for document verification only.',

        // === PROJECT PAGE (project.html) ===

        // Project Page
        'project.hero.pill': 'Track 3',
        'project.hero.title': 'Verify Construction Contracts & Claims Documents',
        'project.hero.subtitle': 'Prevent EOT claim rejections, unauthorized variation orders, and payment disputes with comprehensive construction document verification. TertibDocs ensures your contracts, VOs, and claims are complete and properly documented.',
        'project.hero.cta.primary': 'Start Project Verification',
        'project.hero.cta.secondary': 'View Complete Checklist',

        // Project - Why Matters
        'project.why.pill': 'Why It Matters?',
        'project.why.title': 'Risks of Incomplete Construction Documentation',
        'project.why.subtitle': 'Construction documentation errors can result in rejected claims and billions in losses',
        'project.why.card1.title': 'EOT Claim Rejected',
        'project.why.card1.desc': 'Extension of Time claim rejected because Notice was not submitted within the contract time bar (e.g., 14 days from delay event).',
        'project.why.card2.title': 'Unpaid Variation Orders',
        'project.why.card2.desc': 'Extra work performed but no written Variation Instruction or approved quotation. Payment claim denied.',
        'project.why.card3.title': 'Payment Certificate Withheld',
        'project.why.card3.desc': 'Payment application incomplete - missing as-built drawings, inspection reports, or mismatch with programme of works.',

        // Project - Checklist
        'project.checklist.pill': 'Comprehensive Checklist',
        'project.checklist.title': 'Construction Documents We Verify',
        'project.checklist.subtitle': 'Complete checklist for safe and organized construction projects',

        // Checklist Items
        'project.check.contract.title': '1. Main Contract Documents',
        'project.check.contract.item1': 'Construction Contract (Main Agreement)',
        'project.check.contract.item1.desc': 'Parties, scope of works, contract sum, period, commencement/completion date, Liquidated Damages, retention, payment terms.',
        'project.check.contract.item2': 'Contract Drawings & Specs',
        'project.check.contract.item2.desc': 'Drawing list complete, revision status, matches scope of works',
        'project.check.contract.item3': 'Bill of Quantities (BOQ)',
        'project.check.contract.item3.desc': 'Item descriptions, quantities, unit rates, total contract sum matches main agreement',
        'project.check.contract.item4': 'Programme of Works',
        'project.check.contract.item4.desc': 'Critical path, milestone dates, completion date matches contract.',

        'project.check.variation.title': '2. Variation & Change Orders',
        'project.check.variation.item1': 'Variation Instruction (VI)',
        'project.check.variation.item1.desc': 'VI number, date, description, clause reference, signed by Engineer. Must have written VI BEFORE work starts.',
        'project.check.variation.item2': 'Variation Quotation (VQ)',
        'project.check.variation.item2.desc': 'Breakdown costs (labour, material, equipment), time extension requested.',
        'project.check.variation.item3': 'Variation Order (VO)',
        'project.check.variation.item3.desc': 'VO number, reference to VI/VQ, agreed price/time, signed by both parties.',

        'project.check.claims.title': '3. Claims & Notices',
        'project.check.claims.item1': 'Notice of Delay',
        'project.check.claims.item1.desc': 'Date, event, clause reference, submitted within time bar (e.g., 14/28 days).',
        'project.check.claims.item2': 'EOT Claim',
        'project.check.claims.item2.desc': 'Delay analysis (as-planned vs as-built), critical path impact, supporting docs.',
        'project.check.claims.item3': 'Cost Claim',
        'project.check.claims.item3.desc': 'Cost breakdown (overhead, equipment, labour), invoices, entitlement basis.',
        'project.check.claims.item4': 'Final Account',
        'project.check.claims.item4.desc': 'Summary of variations, claims, deductions, retention release.',

        'project.check.payment.title': '4. Payment Documents',
        'project.check.payment.item1': 'Payment Application',
        'project.check.payment.item1.desc': 'Value of work done, variations included, retention deducted, net claim.',
        'project.check.payment.item2': 'Measurement Sheets',
        'project.check.payment.item2.desc': 'Measured quantities match claim, signed by site supervisor/QS.',
        'project.check.payment.item3': 'Payment Certificate',
        'project.check.payment.item3.desc': 'Certified amount, due date, signed/stamped by Engineer.',

        'project.check.support.title': '5. Supporting Documents',
        'project.check.support.item1': 'Progress Photos',
        'project.check.support.item1.desc': 'Dated photos showing work in progress.',
        'project.check.support.item2': 'Site Meeting Minutes',
        'project.check.support.item2.desc': 'Decisions made, instructions given, attendees list.',
        'project.check.support.item3': 'Inspection Reports',
        'project.check.support.item3.desc': 'QC reports, material tests, third-party inspections.',

        // Project - Issues
        'project.issues.pill': 'Problem Prevention',
        'project.issues.title': '7 Most Common Construction Issues',
        'project.issues.subtitle': 'And how TertibDocs prevents them',

        'project.issue1.title': 'Time Bar - Late Notice',
        'project.issue1.problem': 'Contractor submits EOT claim after notice period (e.g. 28 days). Claim invalid.',
        'project.issue1.sol': 'Track events, alert notice deadlines, check notice format.',

        'project.issue2.title': 'Variation Without Written VI',
        'project.issue2.problem': 'Extra work based on verbal instruction. Payment denied due to "no written VI".',
        'project.issue2.sol': 'Flag variation work without VI reference. Verify signatures.',

        'project.issue3.title': 'Programme Not Updated',
        'project.issue3.problem': 'EOT claim without updated programme. Rejected due to "no critical path impact".',
        'project.issue3.sol': 'Check baseline vs updated programme, delay analysis.',

        'project.issue4.title': 'Payment Claim Doesn\'t Match BOQ',
        'project.issue4.problem': 'Claim 80% but measured qty/photos don\'t support it. Certificate reduced.',
        'project.issue4.sol': 'Cross-check payment claim vs BOQ, measurement sheets, photos.',

        'project.issue5.title': 'Missing Contemporaneous Records',
        'project.issue5.problem': 'EOT claim without daily records, site diary, or photos. Hard to prove.',
        'project.issue5.sol': 'Check availability of site diary, weather data, correspondence.',

        'project.issue6.title': 'Cost Claim Without Substantiation',
        'project.issue6.problem': 'Prolongation cost claim is lump sum without breakdown/receipts. Rejected.',
        'project.issue6.sol': 'Verify detailed cost breakdown and supporting invoices.',

        'project.issue7.title': 'Retention & Bank Guarantee Unclear',
        'project.issue7.problem': 'Unclear retention amount held, release date unknown. Delayed final payment.',
        'project.issue7.sol': 'Track retention % per certificate. Alert release date.',

        // Project - How It Works
        'project.how.pill': 'Verification Process',
        'project.how.title': 'How TertibDocs Works for Construction',
        'project.how.subtitle': '4 easy steps for organized construction documents',
        'project.how.step1.title': 'Upload Project Documents',
        'project.how.step1.desc': 'Contract, VI/VO, Notices, Claims, Payment Certs, Programme, Photos.',
        'project.how.step2.title': 'AI Data Extraction',
        'project.how.step2.desc': 'Dates, time bars, notice requirements, payment terms, LD rates, parties.',
        'project.how.step3.title': 'Checklist Compliance',
        'project.how.step3.desc': 'Verify notice deadlines, authorized VI, substantiated claims, correct calculations.',
        'project.how.step4.title': 'Download Report',
        'project.how.step4.desc': 'Report PASS/WARN/FAIL. Action items to strengthen claims or fix gaps.',

        // Project - Sample Output
        'project.sample.pill': 'Sample Output',
        'project.sample.title': 'Sample Construction Verification Report',
        'project.sample.report_title': 'Verification Report - Mall Construction Project',
        'project.sample.pass1': 'Main Contract Agreement signed and dated, all parties identified',
        'project.sample.pass2': 'Baseline Programme present with critical path and milestone dates',
        'project.sample.warn1': 'Variation Order VO-023 references VI-023, but VI-023 not found. Ensure VI is obtained.',
        'project.sample.warn2': 'Cost Claim for prolongation shows lumpsum IDR 500 million without breakdown.',
        'project.sample.fail1': 'EOT Claim #5 submitted late (2025-12-15) for event on 2025-11-02. TIME BAR RISK.',
        'project.sample.fail2': 'Payment Certificate #8 claims IDR 2.4 billion without measurement sheets/photos.',
        'project.sample.rec': 'Recommended Actions:',
        'project.sample.act1': 'Urgent: Review EOT Claim #5 - withdrawal/resubmit with proper notice.',
        'project.sample.act2': 'Obtain missing VI-023.',
        'project.sample.act3': 'Prepare measurement sheets/photos for Payment Cert #8.',
        'project.sample.act4': 'Add detailed breakdown for prolongation cost claim.',

        // Project - Forms
        'project.forms.pill': 'Contract Standards',
        'project.forms.title': 'Supporting Various Standard Forms',
        'project.forms.fidic.title': 'FIDIC (International)',
        'project.forms.fidic.desc': 'Familiar with:',
        'project.forms.fidic.list': 'Red Book, Yellow Book, Silver Book, Clause 20 Claims.',
        'project.forms.jkr.title': 'JKR / Local Government',
        'project.forms.jkr.desc': 'Familiar with:',
        'project.forms.jkr.list': 'JKR Malaysia Contract, PWD, Procurement Regulations.',
        'project.forms.custom.title': 'Local & Custom Contracts',
        'project.forms.custom.desc': 'We support:',
        'project.forms.custom.list': 'Local developer contracts, custom/modified contracts.',

        // Project - CTA & Footer
        'project.cta.title': 'Ready to Verify Your Construction Documents?',
        'project.cta.subtitle': 'Upload project documents now and ensure solid claims and payments',
        'project.cta.primary': 'Start Project Verification',
        'project.cta.secondary': 'Contact Sales for Demo',
        'project.cta.whatsapp_link': 'https://wa.me/966504183224?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20CONSTRUCTION%20TertibDocs',
        'project.footer.disclaimer': 'TertibDocs does not provide legal, QS, or engineering advice. Platform is for document verification only.',
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

    // Update elements with data-i18n-href (links)
    const linkElements = document.querySelectorAll('[data-i18n-href]');
    linkElements.forEach(el => {
        const key = el.getAttribute('data-i18n-href');
        const translatedLink = translations[lang][key];
        if (translatedLink) {
            el.href = translatedLink;
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
