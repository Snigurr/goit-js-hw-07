function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const inputEl = document.querySelector('input');
const destroyBtn = document.querySelector('[data-destroy]');
const createBtn = document.querySelector('[data-create]');

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputEl.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100');
    inputEl.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

