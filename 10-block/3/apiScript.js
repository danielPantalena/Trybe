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

const randomNumber = num => Math.random() * (num - 1) + 1;

const createArray = num => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.pow(randomNumber(50), 2));
  }
  return arr;
};

const arrayNumbers = createArray(10);

const arrSumFun = arr => arr.reduce((total, num) => total + num);

const arrSum = arrSumFun(arrayNumbers);


const isArrSumLowerThan = () => arrSum < 8000;

console.log('isLT 8000?', isArrSumLowerThan());

const p = new Promise((resolve, reject) => {
  if (isArrSumLowerThan()) resolve('resolved called');
  else reject('rejected');
});

p.then(message => {
  console.log(message, 'then called');
  console.log([arrSum/2, arrSum/3, arrSum/5, arrSum/10]);
}).catch(err => {
  console.log(err, 'catch called');
  console.log('É mais de 8000');
});

window.onload = () => fetchJoke();
