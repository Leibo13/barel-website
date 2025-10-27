// =====================
// Safe Cookie Consent Script
// =====================

// בדיקה אם המשתמש כבר נתן הסכמה
document.addEventListener('DOMContentLoaded', function() {
    const consent = localStorage.getItem('cookie_consent');

    if (!consent) {
        showCookieBanner();
    } else if (consent === 'accepted') {
        enableExternalScripts();
    }
});

// =====================
// Banner Functions
// =====================
function showCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (banner) banner.style.display = 'block';
}

function hideCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (banner) banner.style.display = 'none';
}

// =====================
// User Actions
// =====================
function acceptCookies() {
    localStorage.setItem('cookie_consent', 'accepted');
    hideCookieBanner();
    enableExternalScripts();
}

function rejectCookies() {
    localStorage.setItem('cookie_consent', 'rejected');
    hideCookieBanner();
}

// =====================
// Load External Scripts Safely
// =====================
function enableExternalScripts() {
    // דוגמה: טעינת Google Analytics רק לאחר הסכמה
    const gaScript = document.createElement('script');
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // החלף ב‑ID שלך
    gaScript.async = true;
    document.head.appendChild(gaScript);

    gaScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX'); // החלף ב‑ID שלך

        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted',
            'security_storage': 'granted'
        });
    };

    // כאן ניתן להוסיף כל סקריפט צד שלישי נוסף (Pixel, Ads וכו.)
    // רק כאן – אחרי שהמשתמש אישר
}

// =====================
// Protect Your Cookies
// =====================
// בדוק שהעוגיות באתר מוגדרות עם SameSite=Strict ו-Secure:
// document.cookie = "name=value; SameSite=Strict; Secure; path=/";
