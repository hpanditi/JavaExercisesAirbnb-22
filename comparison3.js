// bad
if (isValid === true) {
    // ...
}

// good
if (isValid) {
    // ...
}

// bad
if (name) {
    // ...
}

// good
if (name !== '') {
    // ...
}

// bad
if (collection.length) {
    // ...
}

// good
if (collection.length > 0) {
    // ...
}