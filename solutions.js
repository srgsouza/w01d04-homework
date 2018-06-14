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
