// Kata 3 - Vowels

const vowels = ["a", "e", "i", "o", "u"];

const numberOfVowels = function (data) {
  let vowelCount = 0;

  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === "a" ||
      data[i] === "e" ||
      data[i] === "i" ||
      data[i] === "o" ||
      data[i] === "u"
    ) {
      vowelCount += 1;
    }
  }

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Expected output:
// 3
// 5
// 5
