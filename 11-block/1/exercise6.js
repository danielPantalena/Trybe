const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = name =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalName = Animals.find(animal => animal.name === name);
      if (animalName) {
        return resolve(animalName);
      }
      return reject({ error: 'Nenhum animal com esse nome!' });
    }, 100);
  });

const getAnimal = async name => await findAnimalByName(name);
// .then(animal => animal)
// .catch(err => err);

const findAnimalByAge = age =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsWithThisAge = Animals.filter(animal => animal.age === age);
      if (animalsWithThisAge.length !== 0) return resolve(animalsWithThisAge);
      return reject({ error: 'Nenhum animal com essa idade!' });
    }, 100);
  });

const getAnimalByAge = age => findAnimalByAge(age);
// .then(animals => animals)
// .catch(err => err);

module.exports = { getAnimal, getAnimalByAge };
