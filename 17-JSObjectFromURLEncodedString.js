// Kata 17 - JS Object From URL Encoded String

const urlDecode = (text) => {
  const result = {};

  // Split the incoming text argument into an array of key-value pairs at the `&` symbol
  const keyValuePairs = text.split('&');

  // Loop through each key-value pair in the array
  for (const pair of keyValuePairs) {

    // Split the key-value pair out into `key` and `value` at the `=` symbol
    const [key, value] = pair.split('=');

    // Decode the URL-encoded value and assign it to the key in the result object
    result[key] = decodeURIComponent(value);
  }

  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


// Expected output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"