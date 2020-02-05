// bad
class Foo {
    bar() { return 1; }
    bar() { return 2; }
}

// good
class Foo {
    bar() { return 1; }
}

// good
class Foo {
    bar() { return 2; }
}