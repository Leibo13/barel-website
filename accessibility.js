document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    loadAccessibilityPreferences();

    // Toggle widget visibility
    const widget = document.querySelector('.accessibility-widget');
    const toggle = document.querySelector('.accessibility-toggle');
    const closeBtn = document.querySelector('.accessibility-close');

    toggle.addEventListener('click', () => {
        widget.style.display = widget.style.display === 'none' ? 'block' : 'none';
    });

    closeBtn.addEventListener('click', () => {
        widget.style.display = 'none';
    });

    // Font size controls
    let currentFontSize = 100;
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'increase' && currentFontSize < 150) {
                currentFontSize += 10;
            } else if (action === 'decrease' && currentFontSize > 70) {
                currentFontSize -= 10;
            }
            document.documentElement.style.fontSize = `${currentFontSize}%`;
            savePreference('fontSize', currentFontSize);
        });
    });

    // High Contrast Mode
    const highContrastToggle = document.getElementById('highContrastToggle');
    highContrastToggle.addEventListener('change', () => {
        document.body.classList.toggle('high-contrast');
        savePreference('highContrast', highContrastToggle.checked);
    });

    // Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        savePreference('darkMode', darkModeToggle.checked);
    });

    // Line Spacing
    const lineSpacingToggle = document.getElementById('lineSpacingToggle');
    lineSpacingToggle.addEventListener('change', () => {
        document.body.classList.toggle('increased-spacing');
        savePreference('lineSpacing', lineSpacingToggle.checked);
    });

    // Stop Animations
    const stopAnimationsToggle = document.getElementById('stopAnimationsToggle');
    stopAnimationsToggle.addEventListener('change', () => {
        document.body.classList.toggle('no-animations');
        savePreference('stopAnimations', stopAnimationsToggle.checked);
    });
});

function savePreference(key, value) {
    localStorage.setItem(`accessibility_${key}`, JSON.stringify(value));
}

function loadAccessibilityPreferences() {
    // Font Size
    const savedFontSize = JSON.parse(localStorage.getItem('accessibility_fontSize') || '100');
    document.documentElement.style.fontSize = `${savedFontSize}%`;

    // High Contrast
    const highContrast = JSON.parse(localStorage.getItem('accessibility_highContrast') || 'false');
    if (highContrast) {
        document.body.classList.add('high-contrast');
        document.getElementById('highContrastToggle').checked = true;
    }

    // Dark Mode
    const darkMode = JSON.parse(localStorage.getItem('accessibility_darkMode') || 'false');
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }

    // Line Spacing
    const lineSpacing = JSON.parse(localStorage.getItem('accessibility_lineSpacing') || 'false');
    if (lineSpacing) {
        document.body.classList.add('increased-spacing');
        document.getElementById('lineSpacingToggle').checked = true;
    }

    // Stop Animations
    const stopAnimations = JSON.parse(localStorage.getItem('accessibility_stopAnimations') || 'false');
    if (stopAnimations) {
        document.body.classList.add('no-animations');
        document.getElementById('stopAnimationsToggle').checked = true;
    }
}