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

// Write a function sumArray that takes an array as an argument.The array should contain numbers.The function should return the sum of the numbers in the array.Use a for loop within the function to iterate over the array and sum the contents.Use a variable such as
//   let sum = 0;
// that will accumulate value within the loop.Expected result:

let sum = 0;
const sumArray = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));


// A Prime number is a number that is not evenly divisible by another number except 1 and itself.If you want to read more deeply about it, go here.To test whether a number is Prime, you only need to test as far as the square root of that number.This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime.The function will return true(Boolean) if Prime, false if not.Hint: Check every number up to the square root.To do this, try a for loop.
// O(n)
const checkPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
}
console.log(checkPrime(47));

// O(sqrt(n))
const checkPrime2 = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(97);


// Step Two
// Write another function called printPrimes that will print(console log) all the Primes up to an arbitrary limit.For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

const printPrimes = (num) => {
  for (let i = 0; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(`${i} is a prime number`);
    }
  }
}
printPrimes(97);

