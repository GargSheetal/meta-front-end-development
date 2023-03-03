// workimg with sets
// sets can take arrays as arguments to find the unique values

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);  // Set(3) { 'apple', 'pear', 'plum' }