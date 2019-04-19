describe("ChallengeFive", function() {
    let ChallengeFive = require('../src/ChallengeFive');
    let challengeFive;
  
    beforeEach(function() {
        challengeFive = new ChallengeFive();
    });
  
    it("should detect two 'a' in 'The rain in Spain'", function() {
        let result = challengeFive.charCount("The rain in Spain", "a");
        expect(result).toBe(2);
    });

    it("should detect four 'i' in 'Mississippi", function() {
        var result = challengeFive.charCount("Mississippi", "i");
        expect(result).toBe(4);
    });

    it("should not detect three 'i' in 'Hacking with Swift'", function() {
        var result = challengeFive.charCount("Hacking with Swift", "i");
        expect(result).toBe(3);
    });
});
  