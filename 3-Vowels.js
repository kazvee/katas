// Kata 3 - Vowels

const vowels = ["a", "e", "i", "o", "u"];

const numberOfVowels = (data) => {
  let vowelCount = 0;

  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      vowelCount += 1;
    }
  }

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Expected output
// 3
// 5
// 5