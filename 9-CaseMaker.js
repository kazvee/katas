// Kata 9 - Case Maker

const camelCase = function(input) {
  const words = input.split(" ");

  // Set i to be 1 since we need to skip the first word
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  // Join each word with no separation between them and trim any leading or trailing whitespace
  const result = words.join("").trim();

  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// Expected output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious