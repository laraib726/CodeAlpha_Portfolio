let currentIndex = 0;
let activeCards = [];

function filterBooks(category, event) {
    const cards = document.querySelectorAll('.book-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openLightbox(cardElement) {
    const cards = Array.from(document.querySelectorAll('.book-card'));
    activeCards = cards.filter(card => card.style.display !== 'none');
    currentIndex = activeCards.indexOf(cardElement);

    updateLightboxContent();
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= activeCards.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = activeCards.length - 1;
    }
    updateLightboxContent();
}

function updateLightboxContent() {
    const currentCard = activeCards[currentIndex];
    const imgSrc = currentCard.querySelector('img').src;
    const title = currentCard.querySelector('h3').innerText;
    const author = currentCard.querySelector('p').innerText;

    document.getElementById('lightboxImg').src = imgSrc;
    document.getElementById('lightboxCaption').innerText = title + " - " + author;
}