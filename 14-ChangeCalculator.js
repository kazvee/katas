// Kata 14 - Change Calculator

const denominations = {
  twentyDollar: 2000,
  tenDollar: 1000,
  fiveDollar: 500,
  twoDollar: 200,
  oneDollar: 100,
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};

const calculateChange = (total, cash) => {
  const result = cash - total;
  let change = {};
  let remaining = result;

  // Loop though the denominations object
  for (let denomination in denominations) {
    // Calculate quantity of current denominations needed, rounding down to nearest whole number
    let quantity = Math.floor(remaining / denominations[denomination]);

    // If the quantity is greater than 0, we need to include it in the change
    if (quantity > 0) {

      // Add the denomination and its quantity to the change object
      change[denomination] = quantity;

      // Subtract the amount added to change from the remaining result still being calculated
      remaining -= quantity * denominations[denomination];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }