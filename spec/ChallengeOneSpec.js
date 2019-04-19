describe("ChallengeOne", function() {
    let ChallengeOne = require('../src/ChallengeOne');
    let challengeOne;
  
    beforeEach(function() {
        challengeOne = new ChallengeOne();
    });
  
    it("should confirm uniqueness", function() {
        let result = challengeOne.checkUniqueness("No duplicate")
        expect(result).toBe(true);
    });

    it("should confirm uniqueness", function() {
        var result = challengeOne.checkUniqueness("abcdefghijklmnopqrstuvwxyz")
        expect(result).toBe(true);
    });

    it("should confirm uniqueness due to case sensitivity", function() {
        var result = challengeOne.checkUniqueness("AaBbCc")
        expect(result).toBe(true);
    });

    it("should detect doubles", function() {
        var result = challengeOne.checkUniqueness("Hello world")
        expect(result).toBe(false);
    });
  
});
  