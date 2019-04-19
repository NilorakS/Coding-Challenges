class ChallengeOne {
  checkUniqueness (stringToCheck) {
    let mySet = new Set();
    let setLength;
    for (const letter of stringToCheck) {
      mySet.add(letter);
      if (mySet.size == setLength) return false;
      setLength = mySet.size;
    }
    return true;
  };
}

module.exports = ChallengeOne;