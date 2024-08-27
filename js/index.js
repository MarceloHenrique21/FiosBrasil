document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 20; 
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    updateCarousel();
  });
  