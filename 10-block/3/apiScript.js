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

const addJokeToHtml = (jokeMessage) => {
  const jokeHTMLelement = document.createElement('p');
  jokeHTMLelement.innerHTML = jokeMessage;
  document.getElementById('jokeContainer').appendChild(jokeHTMLelement);
}

window.onload = () => fetchJoke();
