(function protectCookies() {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substr(0, eqPos) : c;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Strict;Secure";
    }
})();


document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

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


function hideCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    banner.style.display = 'none';
}

document.querySelectorAll('a[href^="http"]').forEach(link => {
    const note = document.createElement('span');
    note.style.fontSize = "0.8em";
    note.style.color = "#666";
    link.parentNode.insertBefore(note, link.nextSibling);
});

