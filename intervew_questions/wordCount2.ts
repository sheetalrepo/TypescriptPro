

function getMaxOccuranceCountOfWord(sentence: string): { [key: string]: number } {
    let words = sentence.toLowerCase().split(" "); // Split by space
    let wordCount: { [key: string]: number } = {}; // Create an object to store counts

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1; // Increment count
    }

    return wordCount;
}

var sentence = "apple banana apple orange apple banana";
console.log(getMaxOccuranceCountOfWord(sentence));

