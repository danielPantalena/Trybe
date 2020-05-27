const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/random'

const fetchDog = async () => {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  return data;
};

fetchDog()
  .then(resp => resp)
  .then(data => console.log(data));

module.exports = fetchDog;
