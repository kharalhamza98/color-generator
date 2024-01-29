const body = document.body;
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

function colorChoice() {
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  h3.innerText = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
}

color1.addEventListener('input', colorChoice);
color2.addEventListener('input', colorChoice);
