// bad
function bar() {

    console.log(foo);

}

// bad
if (baz) {

    console.log(qux);
} else {
    console.log(foo);

}

// bad
class Foo {

    constructor(bar) {
        this.bar = bar;
    }
}

// good
function bar() {
    console.log(foo);
}

// good
if (baz) {
    console.log(qux);
} else {
    console.log(foo);
}