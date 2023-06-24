// Kata 18 - Square Code

const squareCode = (message) => {
  let result = '';

  // Remove whitespace characters from the message
  const formattedMessage = message.replace(/\s/g, '');

  // Calculate the number of columns (width of our square) based on the rounded-up square root of the formattedMessage length
  const numberOfColumns = Math.ceil(Math.sqrt(formattedMessage.length));

  // Loop over the number of columns in the square
  for (let i = 0; i < numberOfColumns; i++) {

    // Loop over the characters in each column of the square
    for (let j = i; j < formattedMessage.length; j += numberOfColumns) {

      // Add the current character to the result string
      result += formattedMessage[j];

    }
    // Add whitespace between the grouped-together characters (they're not actual words anymore)
    result += ' ';
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Expected output
// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau