describe("ChallengeThree", function() {
    let ChallengeThree = require('../src/ChallengeThree');
    let challengeThree;
  
    beforeEach(function() {
        challengeThree = new ChallengeThree();
    });
  
    it("should return true for 'abca' and 'abca'", function() {
        let result = challengeThree.checkForSameCharsOptimized("abca", "abca")
        expect(result).toBe(true);
    });

    it("should return true for 'abc' and 'cba'", function() {
        var result = challengeThree.checkForSameCharsOptimized("abc", "cba")
        expect(result).toBe(true);
    });

    it("should return true for 'a1 b2' and 'b1 a2'", function() {
        var result = challengeThree.checkForSameCharsOptimized("a1 b2", "b1 a2")
        expect(result).toBe(true);
    });

    it("should return false for 'abc' and 'abca'", function() {
        var result = challengeThree.checkForSameCharsOptimized("abc", "abca")
        expect(result).toBe(false);
    });

    it("should return false for 'abc' and 'Abc' due to case sensitivity", function() {
        var result = challengeThree.checkForSameCharsOptimized("abc", "Abc")
        expect(result).toBe(false);
    });

    it("should return false for 'abc' and 'cbAa'", function() {
        var result = challengeThree.checkForSameCharsOptimized("abc", "cbAa")
        expect(result).toBe(false);
    });

    it("should return false for 'abcc' and 'abca'", function() {
        var result = challengeThree.checkForSameCharsOptimized("abcc", "abca")
        expect(result).toBe(false);
    });
  
});
  