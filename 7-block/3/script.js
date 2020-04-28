const deck = document.getElementById('deck');
const cardsContainer = document.querySelector('div.container');
const cards = [
  'cinco-de-ouros',
  'nove-de-espadas',
  'quatro-de-paus',
  'seis-de-copas',
  'sete-de-espadas',
  'sete-de-paus',
  'tres-de-ouros',
];
const animations = ['rotate', 'grow', 'flip', 'front-flip'];

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function pickCard() {
  deck.addEventListener('click', () => {
    const card = document.createElement('img');
    card.src = `imgs/cartas/${randomPick(cards)}.png`;
    cardsContainer.appendChild(card);
  });
}
function resetAnimation(element) {
  element.className = '';
}
function animateCards() {
  cardsContainer.addEventListener('mouseover', (e) => {
    if (e.target == cardsContainer) return null;
    else if (e.target.className != '') return null;
    e.target.classList.add(randomPick(animations));
    console.log(e.target);
    setTimeout(() => {
      resetAnimation(e.target);
      console.log(e.target);
    }, 1500);
  });
}

window.onload = function () {
  this.pickCard();
  this.animateCards();
};
