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
            // This will return the rest of the word between firstvowelindex, and end of word
            word = word.substring(firstVowelIndex);
            phrase += " " + word + firstConsonants + "ay";
        }
        //substring is used for returning characters between the parameters 
    });
    // trim gets rid of spaces at the beginning and end
    return phrase.trim();
}

// this function is finding the index (where vowel falls in word) of the first vowel
function findFirstVowelIndex(word, vowels){
    let lowestIndex = 1000;
    vowels.forEach(v => {
        let currentIndex = word.indexOf(v);
        // if the current index is less than the lowest index 
        // example "treat"= a is 3, e is 2- since 3 is less than 1000 (lowest index), it will set it to three initially, but e is 2, so will replace it
        if(currentIndex < lowestIndex && currentIndex >= 0) {
            lowestIndex = currentIndex;
        }
    });

    return lowestIndex;
}

module.exports = {
    translate, findFirstVowelIndex
}