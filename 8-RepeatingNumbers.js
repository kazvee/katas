// Kata 8 - Repeating Numbers

const repeatNumbers = function(data) {
  let result = '';

  for (let i = 0; i < data.length; i++) {
    const [valueToRepeat, amountOfTimesToRepeatTheValue] = data[i];
    const repeatedValue = String(valueToRepeat).repeat(amountOfTimesToRepeatTheValue);

    // Check if the current loop is the first one, and if not add a comma and space to the result
    if (i > 0) {
      result += ', ';
    }
    result += repeatedValue;
  }
  return result;

};

// Input Data Format
// [valueToRepeat, amountOfTimesToRepeatTheValue]

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Expected output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292