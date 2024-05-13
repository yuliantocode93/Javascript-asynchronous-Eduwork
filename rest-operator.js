//* Rest Operator dalam Fungsi:

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30

//* Rest Operator dalam Destructuring:

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

const person = { name: "John", age: 30, country: "USA" };
const { name, ...info } = person;
console.log(name); // Output: John
console.log(info); // Output: { age: 30, country: 'USA' }

//* Rest Operator pada Array Function:

const multiply = (multiplier, ...numbers) => {
  return numbers.map((num) => num * multiplier);
};

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Output: [12, 15]
