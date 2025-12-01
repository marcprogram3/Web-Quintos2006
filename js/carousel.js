document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#newsCarousel .news-card');
  let i = 0;
  function next() {
    cards[i].classList.remove('active');
    i = (i + 1) % cards.length;
    cards[i].classList.add('active');
  }
  setInterval(next, 4000);
  cards[0].classList.add('active');
});