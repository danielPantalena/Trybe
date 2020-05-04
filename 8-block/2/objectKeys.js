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

function showSkills(object) {
  for (let key of Object.keys(object)) {
    console.log(`${key}, Nível: ${object[key]}`);
  }
}
console.log('student1:');
showSkills(student1);

console.log();

console.log('student2:');
showSkills(student2);