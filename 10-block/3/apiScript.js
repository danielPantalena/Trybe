const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch('https://icanhazdadjoke.com/', myObject)
    .then(response => response.json())
    .then(data => addJokeToHtml(data.joke));
};

const addJokeToHtml = jokeMessage => {
  const jokeHTMLelement = document.createElement('p');
  jokeHTMLelement.innerHTML = jokeMessage;
  document.getElementById('jokeContainer').appendChild(jokeHTMLelement);
};

// Functions
const randomNumber = num => Math.random() * (num - 1) + 1;

const createArray = num => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomNumber(50));
  }
  return arr;
};

const divisions = dividend => [2, 3, 5, 10].map(divisor => dividend / divisor);

const sumArray = arr => arr.reduce((acc, num) => acc + num);

// Variables
const arrayNumbers = createArray(10);

const arrSum = arrayNumbers.reduce(
  (total, number) => total + Math.pow(number, 2),
  0
);

// Promise
const myFirstPromise = new Promise((resolve, reject) => {
  if (arrSum < 8000) resolve(arrSum);
  else reject(new Error('É mais de 8000, essa promise foi para o reject!'));
});

console.log('isLT 8000?', arrSum < 8000);

// window.onload
window.onload = () => {
  fetchJoke(); // call fetch
  myFirstPromise // call promise
    .then(divisions)
    .then(arrDiv => console.log(sumArray(arrDiv)))
    .catch(err => console.log(err));
};
