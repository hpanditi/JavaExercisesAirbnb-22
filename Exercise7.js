const vowels = string => {
    matches = string.match(/[aeious]/gi);
    return matches ? matches.length: 0;
}

console.log(vowels("pizza"));
console.log(vowels("apple"));
