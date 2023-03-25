// Kata 5 - Percent Encoded String

let urlEncode = function (text) {
  text = text.trim();
  let urlEncodedString = "";
  let whiteSpace = " ";
  let percentage20 = "%20";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === whiteSpace) {
      urlEncodedString += percentage20;
    } else {
      urlEncodedString += text[i];
    }
  }
  return urlEncodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected output:
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure
