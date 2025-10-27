// Consent Mode v2 Setup
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted',
    'personalization_storage': 'denied',
    'wait_for_update': 500
});

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookie_consent')) {
        showCookieBanner();
    } else if (localStorage.getItem('cookie_consent') === 'accepted') {
        enableGoogleAnalytics();
    }
});

function showCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    banner.style.display = 'block';
}

function acceptCookies() {
    localStorage.setItem('cookie_consent', 'accepted');
    enableGoogleAnalytics();
    hideCookieBanner();
}

function rejectCookies() {
    localStorage.setItem('cookie_consent', 'rejected');
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    banner.style.display = 'none';
}

function enableGoogleAnalytics() {
    gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted'
    });
    
    // Initialize GA4 (replace with your measurement ID)
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 measurement ID
}