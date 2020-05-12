// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;
// console.log('console.log(nationality):', nationality);

// const { nationality = "Brazilian" } = person
// console.log('console.log(nationality):', nationality);

const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))


