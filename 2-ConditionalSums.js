// Kata 2 - Conditional Sums

const conditionalSum = function (values, condition) {
  let number = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      number += values[i];
    } else if (values[i] % 2 !== 0 && condition === "odd") {
      number += values[i];
    }
  }
  return number;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Expected output:
// 6
// 9
// 144
// 0
