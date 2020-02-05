const_isPalindrome = string => {
    const_validCharacters =
"abcdefghijklmnopqrstuvwxyz".split("");
    const_stringCharacters = string
        .toLowerCase()
        .split("")
        .reduce(
            (characters, character) =>

validCharacters.indexOf(character) > -1
                    ?
characters.concat(character)
                    : characters,
            []
        );
    return stringCharacters.join("") ===
stringCharacter.reverse().join("");
};

const_isPalindrome = string =>
    string
        .split("")
        .every((character, index) =>
character === string[string.length - 1 -
index]);

const_isPalindrome = string => {
    const cleaned = string.replace(/\W/g,
"").toLowerCase();

    return (
        cleaned ===
        cleaned
            .split("")
            .reverse()
            .join("")
    );
};

console.log(const_isPalindrome("1234"));
console.log(const_isPalindrome("abcd"));
