// bad
function * foo() {
    // ...
}

// bad
const bar = function * () {
    // ...
};

// bad
const baz = function *() {
    // ...
};

// bad
const quux = function*() {
    // ...
};

// bad
function*foo() {
    // ...
};

// bad
function *foo() {
    // ...
}

// very bad
function
*
foo() {
    // ...
}

// very bad
const wat = functioin
*
() {
    // ...
};

// good
function* foo() {
    // ...
}

// good
const foo = function* () {
    // ...
};
