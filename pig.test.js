const pig = require("./pig")
describe("pig", () => {
    test("word starts with vowel", () => {
        expect(pig.translate("apple")).toEqual("appleway");
    });
    test("word starts with consonant", () => {
        expect(pig.translate("consonant")).toEqual("onsonantcay");
    });
    test("phrase starts with vowel", () => {
        expect(pig.translate("apple orange")).toEqual("appleway orangeway");
    });
    test("phrase starts with consonant", () => {
        expect(pig.translate("hungry hippo")).toEqual("ungryhay ippohay");
    });
    test("mixed phrase", () => {
        expect(pig.translate("sara evans is great")).toEqual("arasay evansway isway eatgray");
    });
    test("phrase starts with consonant and cap letters", () => {
        expect(pig.translate("Hungry Hippo")).toEqual("ungryhay ippohay");
    });
    test("word starts with several consonants", () => {
        expect(pig.translate("street")).toEqual("eetstray");
    });
});