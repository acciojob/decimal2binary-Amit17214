function decimalToBinary(num) {
  // Check if the input is not a valid positive integer
  if (!Number.isInteger(num) || num < 0) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  // Base case: if the number is 0, its binary representation is also 0
  if (num === 0) {
    return "0";
  }

  let binary = "";
  while (num > 0) {
    // Get the remainder when dividing by 2 (0 or 1)
    binary = (num % 2) + binary;
    // Divide the number by 2, rounding down to the nearest integer
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;

