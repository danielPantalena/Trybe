// add key
const myObject = {};

function introduceKeyToObject(object, key, value) {
  const newKey = key;
  object[newKey] = value;
  console.log(object);
}

introduceKeyToObject(myObject, 'name', 'daniel');

// Object.keys(objectName)
// Return a array with the keys of the object
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function showSkills(student) {
  for (let key of Object.keys(student)) {
    console.log(`${key}, Nível: ${student[key]}`);
  }
}
console.log('student1:');
showSkills(student1);

console.log();

console.log('student2:');
showSkills(student2);


// Object.values()
// Return a array with the values of the object
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  console.log(student);
  const skills = [];
  for(skill in student) {
    console.log(skill);
    skills.push(student[skill]);
  }

  return skills;
};

  const listSkillsWithValues = (student) => Object.values(student);

Sem Object.values
console.log(listSkillsWithFor(student));

  // Com Object.values
  console.log(listSkillsWithValues(student));