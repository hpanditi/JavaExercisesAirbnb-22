// bad
if (foo) {
    return bar;
}
return baz;

// good
if (foo) {
    return bar;
}

return baz;

// bad
const obj = {
    foo() {
    },
    bar() {
    },
};
return obj;

// good
const obj = {
    foo() {
    },

    bar() {
    },
};

return obj;

// bad
const arr = [
    function foo() {
    },
];
return arr;

// good
const arr = [
    function foo() {
    },

    function bar() {
    },
];

return arr;
