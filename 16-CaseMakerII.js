// Kata 16 - Case Maker II

const processingOrder = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];

const camel = (text) => {
  const result = text
    // Except for the first character in the string, make all the beginning characters of words uppercase
    .replace(/(?<!^)\b\w/g, char => char.toUpperCase())
    // Replace all whitespace characters with an empty string (removes all whitespace)
    .replace(/\s/g, '');
  return result;
};

const pascal = (text) => {
  const result = text
    // Make all the beginning characters of words uppercase
    .replace(/\b\w/g, char => char.toUpperCase())
    // Replace all whitespace characters with an empty string (removes all whitespace)
    .replace(/\s/g, '');
  return result;
};

const snake = (text) => {
  // Replace all whitespace characters with an underscore
  const result = text.replace(/\s/g, '_');
  return result;
};

const kebab = (text) => {
  // Replace all whitespace characters with an dash
  const result = text.replace(/\s/g, '-');
  return result;
};

const title = (text) => {
  // Make all the first characters of words uppercase
  const result = text.replace(/\b\w/g, char => char.toUpperCase());
  return result;
};

const vowel = (text) => {
  // Make all the characters for the provided values (which are vowels) uppercase
  const result = text.replace(/[aeiou]/g, char => char.toUpperCase());
  return result;
};

const consonant = (text) => {
  // Except for the provided values (which are vowels), make all characters uppercase
  const result = text.replace(/[^aeiou]/g, char => char.toUpperCase());
  return result;
};

const upper = (text) => {
  // Make the test uppercase
  const result = text.toUpperCase();
  return result;
};

const makeCase = (input, casing) => {
  let result = input;

  // Turn the `casing` argument into an array to iterate through it (as it may contain more than one value)
  if (!Array.isArray(casing)) {
    casing = [casing];
  }

  // Iterate through values provided for `casing` array
  for (const casingOption of casing) {
    // Iterate though the values provided for processingOrder array, and if exists, apply the related function
    if (processingOrder.includes(casingOption)) {
      if (casingOption === "camel") {
        result = camel(result);
      } if (casingOption === "pascal") {
        result = pascal(result);
      } if (casingOption === "snake") {
        result = snake(result);
      } if (casingOption === "kebab") {
        result = kebab(result);
      } if (casingOption === "title") {
        result = title(result);
      } if (casingOption === "vowel") {
        result = vowel(result);
      } if (casingOption === "consonant") {
        result = consonant(result);
      } if (casingOption === "upper") {
        result = upper(result);
      } if (casingOption === "lower") {
        result = result.toLowerCase();
      }
    }
  }

  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// Expected output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING