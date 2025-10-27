// Cookie consent management
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    document.querySelector('.cookie-banner').style.display = 'none';
    initializeGA();
}

function rejectCookies() {
    setCookie('cookieConsent', 'rejected', 365);
    document.querySelector('.cookie-banner').style.display = 'none';
}

// Check if user has already made a choice
document.addEventListener('DOMContentLoaded', function() {
    const consent = getCookie('cookieConsent');
    if (!consent) {
        document.querySelector('.cookie-banner').style.display = 'block';
    } else if (consent === 'accepted') {
        initializeGA();
    }
});

// Initialize Google Analytics
function initializeGA() {
    // Add your GA4 initialization code here
    // Example:
    /*
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-ID';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA4-ID');
    */
}