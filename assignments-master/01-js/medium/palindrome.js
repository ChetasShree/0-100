/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let d = str.length-1;
  for(let i=0;i<str.length/2;i++){
    if(str[i] != str[d]) return false;
    d--;
  }   
  return true;
}
// function isPalindrome(str) {
//   let rev = str.split("").reverse().join("");
//   if(rev != str) return false;
//   return true;
// }

module.exports = isPalindrome;

