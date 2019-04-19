class ChallengeFour {
  fuzzyContains(containingString, containedString) {
    containingString = containingString.toLowerCase();
    containedString = containedString.toLowerCase();

    return (containingString.includes(containedString));
  };
}

module.exports = ChallengeFour;