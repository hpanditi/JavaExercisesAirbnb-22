const_reverse = string =>
    string
        .split("")
        .reverse()
        .join("");

const_reverse = string => {
    let result = " ";
    for (let character of string) result
= character + result;
    return result;
};

console.log(const_reverse("Hello"));
console.log(const_reverse("Goodbye"));

