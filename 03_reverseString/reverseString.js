function reverseString(string) {
    // Step 1: Split string into array of characters
    const characterArray = string.split("");
    // Step 2: Reverse array of characters
    const reversedArray = characterArray.reverse();
    // Step 3: Join reversed array back into string
    const reversedString = reversedArray.join("")

    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
