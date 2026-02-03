// ============================================
// TerTibDocs Landing Page JavaScript
// Mobile-first interactions and animations
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');

            // Update toggle icon
            if (mobileMenu.classList.contains('active')) {
                mobileMenuToggle.textContent = '✕';
            } else {
                mobileMenuToggle.textContent = '☰';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Scroll Animation - Intersection Observer
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // ============================================
    // Card Hover Effects (Enhanced for touch devices)
    // ============================================
    const cards = document.querySelectorAll('.card');

    // For touch devices, add active state on tap
    cards.forEach(card => {
        card.addEventListener('touchstart', function () {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('touchend', function () {
            this.style.transform = '';
        });
    });

    // ============================================
    // Performance: Lazy Load Images
    // ============================================
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (!img.src) {
                        img.src = img.dataset.src;
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // Add dynamic year to copyright
    // ============================================
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2026', currentYear);
    }

    // ============================================
    // Prevent FOUC (Flash of Unstyled Content)
    // ============================================
    document.body.style.opacity = '1';

    // ============================================
    // Accessibility: Focus visible for keyboard navigation
    // ============================================
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-nav');
    });

    // ============================================
    // Optional: Track scroll depth for analytics
    // ============================================
    let scrollDepthMarkers = [25, 50, 75, 100];
    let scrollDepthReached = [];

    window.addEventListener('scroll', function () {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        scrollDepthMarkers.forEach(marker => {
            if (scrollPercentage >= marker && !scrollDepthReached.includes(marker)) {
                scrollDepthReached.push(marker);
                console.log(`Scroll depth: ${marker}%`);
                // You can send this to analytics here
                // e.g., gtag('event', 'scroll_depth', { depth: marker });
            }
        });
    });

    // ============================================
    // Optional: Console branding
    // ============================================
    console.log('%cTerTibDocs', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cRapikan dokumen Anda sebelum masalah membesar 📄', 'font-size: 14px; color: #14b8a6;');

});

// ============================================
// Service Worker Registration (Optional - for PWA)
// ============================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/
