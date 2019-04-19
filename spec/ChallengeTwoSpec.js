describe("ChallengeTwo", function() {
    let ChallengeTwo = require('../src/ChallengeTwo');
    let challengeTwo;
  
    beforeEach(function() {
        challengeTwo = new ChallengeTwo();
    });
  
    it("should detect a palindrome for 'rotator'", function() {
        let result = challengeTwo.checkPalindromeOptimized("rotator")
        expect(result).toBe(true);
    });

    it("should detect a palindrome for 'Rats live on no evil star'", function() {
        var result = challengeTwo.checkPalindromeOptimized("Rats live on no evil star")
        expect(result).toBe(true);
    });

    it("should reject a palindrome for 'Never odd or even'", function() {
        var result = challengeTwo.checkPalindromeOptimized("Never odd or even")
        expect(result).toBe(false);
    });

    it("should reject a palindrome for 'Hello, world'", function() {
        var result = challengeTwo.checkPalindromeOptimized("Hello, world")
        expect(result).toBe(false);
    });
  
});
  