const capitalize = phrase => {
    const words = [];

    for (let word of phrase.split(" "))
        words.push(word[0].toUpperCase()
+ word.slice(1));

    return words.join(" ");
};

console.log(capitalize("acting"));

