// bad
const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// beter
const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
