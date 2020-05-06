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
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 }); // Clone
const allLessonsWithSpread = { ...lesson1, ...lesson2, ...lesson3 }; // The same result
const allLessonsWithOutScope = Object.assign({}, lesson1, lesson2, lesson3); // Diferent result
// Copy
const allLessonsCopy = {
  lesson1: { ...lesson1 },
  lesson2: { ...lesson2 },
  lesson3: { ...lesson3 },
};
console.log(allLessonsWithSpread);

// 6
function numberOfStudents(obj) {
  let totalNumber = 0;
  for (let lesson in obj) {
    totalNumber += obj[lesson].numeroEstudantes;
  }
  return totalNumber;
}

// 7
const getValueByIndex = (obj, index) => obj[Object.keys(obj)[index]];

// 8
const findPair = (obj, key, value) => (obj[key] === value ? true : false);

// Bonus
// 1
const mathStudents = (obj) => {
  let result = 0;
  for (let key in obj) {
    if (obj[key].materia === 'Matemática') result += obj[key].numeroEstudantes;
  }
  return result;
};

// 2
const createReport = (obj, teacher) => {
  let arrayClass = [];
  let students = 0;
  const report = {};
  for (let key in obj) {
    if (obj[key].professor === teacher) {
      arrayClass.push(obj[key].materia);
      students += obj[key].numeroEstudantes;
    }
  }
  report.professor = teacher;
  report.aulas = arrayClass;
  report.estudantes = students;
  return report;
};
