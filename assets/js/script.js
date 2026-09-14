(() => {
    const card = document.getElementById('flipCard');
    const button = document.getElementById('flipButton');
    const status = document.getElementById('status');
    const whatsapp = document.querySelector('.whatsapp-link');

    function flipCard() {
        const flipped = card.classList.toggle('flipped');
        card.setAttribute('aria-pressed', String(flipped));
        card.setAttribute('aria-label', flipped ? 'Voltar para a frente' : 'Virar cartão');
        status.textContent = flipped ? 'Verso' : 'Frente';
    }

    card.addEventListener('click', (event) => {
        if (event.target.closest('.whatsapp-link')) return;
        flipCard();
    });

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        flipCard();
        card.focus({ preventScroll: true });
    });

    card.addEventListener('keydown', (event) => {
        if (event.target.closest('.whatsapp-link')) return;

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            flipCard();
        }
    });

    // Garante que clicar no WhatsApp nunca acione o flip.
    ['click', 'pointerdown', 'pointerup', 'touchstart'].forEach(type => {
        whatsapp.addEventListener(type, event => event.stopPropagation());
    });
})();
