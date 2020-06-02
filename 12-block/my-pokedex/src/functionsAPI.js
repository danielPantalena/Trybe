const fetchInsideFetch = async (URL) => {
  const responseInside = await fetch(URL);
  const responseInsideJSON = await responseInside.json();
  const {
    name,
    types,
    weight: averageWeight,
    sprites: image,
  } = responseInsideJSON;
  const pokemon = { name, types, averageWeight, image };
  // console.log(pokemon);
  return pokemon;
};

const fetchApiPoke = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
  );
  const responseJSON = await response.json();
  const pokemonsURLArray = await responseJSON.results;
  return pokemonsURLArray;
};

/* const printPoke = async () => {
  const pokemonsArr = await fetchInsideFetch("https://pokeapi.co/api/v2/pokemon/1/")
  console.log(pokemonsArr);
}

printPoke(); */


export default fetchApiPoke;
