document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const widget = document.querySelector('.accessibility-widget');
    const toggleButton = document.querySelector('.accessibility-toggle');
    const closeButton = document.querySelector('.accessibility-close');
    const fontSizeButtons = document.querySelectorAll('.font-size-btn');
    const highContrastToggle = document.getElementById('highContrastToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const lineSpacingToggle = document.getElementById('lineSpacingToggle');
    const stopAnimationsToggle = document.getElementById('stopAnimationsToggle');

    // Load saved preferences
    loadPreferences();

    // Toggle widget visibility
    toggleButton.addEventListener('click', () => {
        widget.style.display = widget.style.display === 'none' ? 'block' : 'none';
    });

    closeButton.addEventListener('click', () => {
        widget.style.display = 'none';
    });

    // Font size controls
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            changeFontSize(action);
        });
    });

    // High contrast mode
    highContrastToggle.addEventListener('change', () => {
        document.body.classList.toggle('high-contrast');
        savePreference('highContrast', highContrastToggle.checked);
    });

    // Dark mode
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        savePreference('darkMode', darkModeToggle.checked);
    });

    // Line spacing
    lineSpacingToggle.addEventListener('change', () => {
        document.body.classList.toggle('increased-spacing');
        savePreference('lineSpacing', lineSpacingToggle.checked);
    });

    // Stop animations
    stopAnimationsToggle.addEventListener('change', () => {
        document.body.classList.toggle('stop-animations');
        savePreference('stopAnimations', stopAnimationsToggle.checked);
    });

    // Helper functions
    function changeFontSize(action) {
        const root = document.documentElement;
        const currentSize = parseFloat(getComputedStyle(root).fontSize);
        const newSize = action === 'increase' ? currentSize * 1.1 : currentSize * 0.9;
        root.style.fontSize = `${newSize}px`;
        savePreference('fontSize', newSize);
    }

    function savePreference(key, value) {
        localStorage.setItem(`accessibility_${key}`, JSON.stringify(value));
    }

    function loadPreferences() {
        // Font size
        const savedFontSize = localStorage.getItem('accessibility_fontSize');
        if (savedFontSize) {
            document.documentElement.style.fontSize = `${JSON.parse(savedFontSize)}px`;
        }

        // High contrast
        const highContrast = JSON.parse(localStorage.getItem('accessibility_highContrast') || 'false');
        highContrastToggle.checked = highContrast;
        if (highContrast) document.body.classList.add('high-contrast');

        // Dark mode
        const darkMode = JSON.parse(localStorage.getItem('accessibility_darkMode') || 'false');
        darkModeToggle.checked = darkMode;
        if (darkMode) document.body.classList.add('dark-mode');

        // Line spacing
        const lineSpacing = JSON.parse(localStorage.getItem('accessibility_lineSpacing') || 'false');
        lineSpacingToggle.checked = lineSpacing;
        if (lineSpacing) document.body.classList.add('increased-spacing');

        // Stop animations
        const stopAnimations = JSON.parse(localStorage.getItem('accessibility_stopAnimations') || 'false');
        stopAnimationsToggle.checked = stopAnimations;
        if (stopAnimations) document.body.classList.add('stop-animations');
    }
});