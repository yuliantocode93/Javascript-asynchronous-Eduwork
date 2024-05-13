//* Destructuring Assignment
// Contoh 1: Memecah array
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 10 20 30

// Contoh 2: Memecah objek
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30

//* Kombinasi Spread Operator dan Destructuring:

// Contoh: Menggabungkan dan memecah array
const parts = ["head", "shoulders"];
const body = ["knees", "toes"];

const fullBody = [...parts, ...body];
console.log(fullBody); // Output: ['head', 'shoulders', 'knees', 'toes']

const [part1, part2, part3, part4] = fullBody;
console.log(part1, part2, part3, part4); // Output: head shoulders knees toes

// Contoh: Menggabungkan dan memecah objek
const person1 = { name: "John", age: 30 };
const person2 = { name: "Jane", age: 25 };

const mergedPerson = { ...person1, ...person2 };
console.log(mergedPerson); // Output: { name: 'Jane', age: 25 }

const { name: personName, age: personAge } = mergedPerson;
console.log(personName, personAge); // Output: Jane 25
