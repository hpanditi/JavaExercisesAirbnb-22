// bad
[1, 2, 3].map(number => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
    [index]: number,
}));

// No implicit return with the side effects
function foo(callback) {
    const val = callback();
    if (val === true) {
        // Do something if callback returns true
    }
}

let bool = false;

// bad
foo(() => boo1 = true);

// good
foo(() => {
    bool = true;
});
