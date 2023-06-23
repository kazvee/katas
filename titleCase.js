// Module 1: Week 4
// Title Case - Kata

const titleCase  = (text) => {
  if (text.length === 0) {
    return "";
  }

  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  const result = words.join(" ");

  return result;
};

console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));

// Expected output
// This Is An Example
// Test
// I R Cool
// What Happens Here
// ''
// A