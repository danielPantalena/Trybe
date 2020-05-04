const myObject = {};

function introduceToObject(object, key, value) {
  const newKey = key;
  object[newKey] = value;
  console.log(object);
}

introduceToObject(myObject, 'name', 'daniel');