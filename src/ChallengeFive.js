class ChallengeFive {
  charCount(stringToScan, charToCount) {
    let count = 0;

    for (const letter of stringToScan) {
      if (letter === charToCount) {
        count++;
      }
    }
    return count;
  };
}

module.exports = ChallengeFive;