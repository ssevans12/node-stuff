const password = require("./password")
describe("password", () => {
    test("log in with correct password", () => {
        expect(password.checkPassword("shawn@psych.com", "tearsforfears")).toEqual("welcome shawn");
        
    })
    
});