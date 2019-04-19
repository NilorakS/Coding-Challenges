class ChallengeTwo {
  checkPalindrome (stringToCheck) {
    stringToCheck = stringToCheck.toLowerCase();
    let reversedString = "";
    for (const letter of stringToCheck) {
      reversedString = letter + reversedString;
    }
    return (reversedString === stringToCheck);
  };

  checkPalindromeOptimized(stringToCheck) {
    stringToCheck = stringToCheck.toLowerCase();
    let charArray = [...stringToCheck];
    charArray = charArray.reverse();
    let reversedString = charArray.join("");
    return (reversedString === stringToCheck);
  }
}

module.exports = ChallengeTwo;