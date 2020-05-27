const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchDog = async () => {
  const resp = await fetch(API_URL);
  const data = resp.json();
  return data;
};

module.exports = { fetchDog };
