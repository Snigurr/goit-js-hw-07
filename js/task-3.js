const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


inputEl.addEventListener("input", (e) => {

    const inputValue = inputEl.value.trim();

    if (inputValue === '' || inputValue === ' ') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = inputValue;
    }

});

