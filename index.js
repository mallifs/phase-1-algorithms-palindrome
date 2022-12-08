function isPalindrome(word) {
  // Write your algorithm here
  console.log(word.split("").reverse().join(""));
  return word === word.split("").reverse().join("");
}
   

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) { 
   
  // add your own custom tests in here
  console.log("abba");
  console.log("=>", isPalindrome("racecar"));

  console.log("a");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
