const spanWidg = document.querySelector('.color');
const buttonWidg = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function newBackg(e) {
  
  e.preventDefault();
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;

  spanWidg.textContent = color;
  
}

buttonWidg.addEventListener('click', newBackg);
