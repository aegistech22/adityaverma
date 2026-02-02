document.addEventListener('DOMContentLoaded', () => {
    const text = "Aspiring Coder • Group Chat Admin";
    const typingElement = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    // Config
    const typingSpeed = 50; // ms per char
    const startDelay = 1000; // ms before starting
    
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Animation finished
            // Optional: Blink cursor for a few seconds then hide? Or keep blinking?
            // Usually keeping it blinking suggests "terminal" or active input.
            // Let's leave it blinking as per CSS.
        }
    }

    // Start typing after delay
    setTimeout(type, startDelay);
});
