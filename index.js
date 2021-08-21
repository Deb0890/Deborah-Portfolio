const carouselBoxes = document.querySelector('.carousel__boxes');
const boxes = document.querySelectorAll('.carousel__boxes .portfolio-item');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfBoxes = document.querySelectorAll('.carousel__boxes .portfolio-item').length;
let boxIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (boxIndex !== 1) {
        boxIndex--;
        translateX += 250;
      }
    } else {
      if (boxIndex !== numberOfBoxes) {
        boxIndex++;
        translateX -= 250;
      }
    }

    carouselBoxes.style.transform = `translateX(${translateX}px)`;
    boxes.forEach((box, index) => {
      if (index === boxIndex - 1) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  });
});





