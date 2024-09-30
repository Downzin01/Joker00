export function type() {
    const words = ["Developer Fullstack", "Developer Front-end", "Designer", "Designer UI&UX", "Pamonha"];
    const typingTextElement = document.getElementById("typing-text");

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const pauseTime = 5000;
    const typingSpeed = 100;
    const deletingSpeed = 100;

    function typeWord() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, letterIndex);
            letterIndex--;

            if (letterIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                letterIndex = 0;
                typingTextElement.classList.remove('blinking');
                setTimeout(typeWord, 0);
                return;
            }
            
        } else {
            typingTextElement.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentWord.length) {
                isDeleting = true;
                typingTextElement.classList.add('blinking');
                setTimeout(typeWord, pauseTime);
                return;
            }
        }

        setTimeout(typeWord, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeWord();
}
