// Sample string
let str = "Hello World";

// Convert the string to lowercase to make the count case-insensitive
str = str.toLowerCase();

// Initialize an empty object to store the count of each letter
let letterCount = {};

// Loop through each character in the string
for (let char of str) {
    // Check if the character is a letter
    if (char >= 'a' && char <= 'z') {
        // If the letter is already in the object, increment its count
        if (letterCount[char]) {
            letterCount[char]++;
        } else {
            // If the letter is not in the object, add it with a count of 1
            letterCount[char] = 1;
        }
    }
}

// Initialize variables to track the letter with the highest occurrence
let maxCount = 0;
let maxLetter = '';

// Loop through the letterCount object to find the letter with the highest count
for (let letter in letterCount) {
    if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        maxLetter = letter;
    }
}

// Print the letter with the highest occurrence and its count
console.log(`The letter '${maxLetter}' has the highest occurrence with ${maxCount} times.`);
