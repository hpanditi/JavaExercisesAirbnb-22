// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappenin()) {
    thing1();    
}

// bad
if (foo === 123 &&
    bar === 'abc') {
    thing1();
}

// bad
if (foo === 123
    && bar === 'abc') {
    thing1();
}

// bad
if (
    foo === 123 &&
    bar ==='abc'
)   {
    thing1();
}

// good
if (
    foo === 123
    && bar === 'abc'
)   {
    thing1();
}

// good
if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
) {
    thing1();
}

// good
if (foo === 123 && bar === 'abc') {
    thing1();
}