function translate(phrase){
    phrase = phrase.toLowerCase();
    let words = phrase.split(" ");
    phrase = "";
    let vowels = ["a", "e", "i", "o", "u"];
    words.forEach(word => {
        let firstLetter = word[0];
        if (vowels.find(v => v == firstLetter) != null){
            phrase += " " + word + "way";
        } else {
            let firstVowelIndex = findFirstVowelIndex(word, vowels);
            let firstConsonants = word.substring(0, firstVowelIndex);
            word = word.substring(firstVowelIndex);
            phrase += " " + word + firstConsonants + "ay";
        }
    });
    return phrase.trim();
}

function findFirstVowelIndex(word, vowels){
    let lowestIndex = 1000;
    vowels.forEach(v => {
        let currentIndex = word.indexOf(v);
        if(currentIndex < lowestIndex && currentIndex >= 0) {
            lowestIndex = currentIndex;
        }
    });

    return lowestIndex;
}