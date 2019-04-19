describe("ChallengeFour", function() {
    let ChallengeFour = require('../src/ChallengeFour');
    let challengeFour;
  
    beforeEach(function() {
        challengeFour = new ChallengeFour();
    });
  
    it("should detect 'Hello' in 'Hello, world'", function() {
        let result = challengeFour.fuzzyContains("Hello, world", "Hello");
        expect(result).toBe(true);
    });

    it("should detect 'WORLD' in 'Hello, world' due to case insensitivity", function() {
        var result = challengeFour.fuzzyContains("Hello, world", "WORLD");
        expect(result).toBe(true);
    });

    it("should not detect 'Goodbye' in 'Hello, world'", function() {
        var result = challengeFour.fuzzyContains("Hello, world", "Goodbye");
        expect(result).toBe(false);
    });
});
  