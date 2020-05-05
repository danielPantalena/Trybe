const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
function addKeyValue(obj, key, value) {
  obj[key] = value;
}
addKeyValue(lesson2, 'turno', 'manhã');

// 2
function objKeys(obj) {
  return Object.keys(obj);
}

// 3
function objLength(obj) {
  return Object.keys(obj).length;
}

// 4
function objValues(obj) {
  return Object.values(obj);
}

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
const allLessonsWithSpread = {...{lesson1, lesson2, lesson3}};
// const allLessonsWithOutScope = Object.assign({}, lesson1, lesson2, lesson3);
// console.log(allLessonsWithOutScope);


// 6
function numberOfStudents(obj) {
  let totalNumber = 0;
  for (let lesson in obj) {
    totalNumber += obj[lesson].numeroEstudantes;
  }
  return totalNumber;
}


