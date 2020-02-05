// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map(number => (
    `A long string with the ${number}. It's so long that we don't want it to take up space on the.map line!`
));

// bad
[1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
