const pig = require("./pig")
describe("pig", () => {
    test("word starts with vowel", () => {
        expect(pig.translate("apple")).toEqual("appleway");
        
    })
    
});