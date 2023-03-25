// Kata 1 - Sum the Largest Numbers

const sumLargestNumbers = function (data) {
  let firstLargest = 0;
  let secondLargest = 0;

  for (let i = 0; i <= data.length; i++) {
    if (data[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = data[i];
    } else if (data[i] > secondLargest && data[i] !== firstLargest) {
      secondLargest = data[i];
    }
  }
  let sumofLargestTwo = firstLargest + secondLargest;
  return sumofLargestTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
