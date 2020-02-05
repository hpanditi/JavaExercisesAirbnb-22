const charCount = string => {
    const table = {};

    for (let char of
string.replace(/\W/g, "").toLowerCase())
        table[char] = table[char] + 1 ||
1;

    return table;
};

console.log(charCount("aSYMptomatic"));
