class ChallengeThree {
  checkForSameChars (stringOne, stringTwo) {
    if (stringOne.length != stringTwo.length) {
      return false;
    }
    let arrayOne = Array.from(stringOne);
    let arrayTwo = Array.from(stringTwo);
    let result = true;

    for (let element of arrayOne) {
      if (arrayTwo.includes(element)) {
        arrayTwo.splice(arrayTwo.indexOf(element), 1);
        continue;
      } else {
        result = false;
        break;
      }
    }
    return result;
  };

  checkForSameCharsOptimized (stringOne, stringTwo) {
    if (stringOne.length != stringTwo.length) {
      return false;
    }
    let arrayOne = Array.from(stringOne);
    let arrayTwo = Array.from(stringTwo);

    arrayOne = arrayOne.sort();
    arrayTwo = arrayTwo.sort();
  
    return (arrayOne.toString() === arrayTwo.toString());
  }
}

module.exports = ChallengeThree;