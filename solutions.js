// What is the difference between a parameter and an argument ?
//  parameter -> when defining a function, one can define "parameter(s)"
//  argument -> when calling a function, we can use arguments.

//   Within a function, what is the difference between return and console.log ?
// console.log prints to the console
// return returns the value (can be used by other functions, or calls)

// Write a function checkPalindrome that accepts a single argument, a string.The function should return true(Boolean) if the string is a palindrome, false if it is not.Make sure your function will give the correct answer for words with capital letters.

const checkPalindrome = (string) => {
  let reverseString = string.split('').reverse('').join('');
  if (string.toLowerCase() === reverseString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));


// Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (num) => {
  let lastDigit = 0;
  let sumOfAllDigits = 0;
  while (num != 0) {
    lastDigit = num % 10;  // grabs the last digit of the number
    // console.log(`Setting lastDigit \(num % 10\) ${lastDigit}`);
    sumOfAllDigits += lastDigit;
    // Decrement num. Divide by 10 to remove last digit, then parse the string to return an integer.
    num = parseInt(num / 10); 
  }
  return sumOfAllDigits;
}
console.log(sumDigits(123));



// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

//   hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

// console.log(calculateSide(8, 6));

  const Pythagorean = (sideA, sideB) => {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
  }

  console.log(Pythagorean(3, 4));