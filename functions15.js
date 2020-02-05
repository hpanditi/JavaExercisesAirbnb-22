// bad
function foo(bar,
            baz,
            quux) {
    // ...
}

// good
function foo(
    bar,
    baz,
    quux,
) {
    // ...
}

// bad
console.log(foo,
    bar,
    baz);

// good
console.log(
    foo,
    bar,
    baz,
);