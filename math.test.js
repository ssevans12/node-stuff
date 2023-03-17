//import { add } from "./math";
//import { describe, test, expect} from "jest";

const math = require("./math")
describe("math", () => {
    test("1 + 1 = 2", () => {
        expect(math.add(1,1)).toEqual(2);
    });
    
    test("1 - 1 = 0", () => {
        expect(math.subtract(1,1)).toEqual(0);
    });
    
});
