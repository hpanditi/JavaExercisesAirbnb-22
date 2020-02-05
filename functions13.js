// bad
function f1(a) {
    // ...
}

function f2(a) {
    if (!a) { a = 1; }
    // ...
}

// good
function f3(a) {
    const b = a || 1;
    //...
}

function f4(a = 1) {
    // ...
}