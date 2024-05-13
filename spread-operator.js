// Contoh 1: Menggabungkan array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Contoh 2: Menyalin array
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [7, 8, 9]
