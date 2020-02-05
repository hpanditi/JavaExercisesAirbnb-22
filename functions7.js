// really bad
function handleThings(opts) {
    // No! We shouldn't mutate function arguments.
    // Double bad; if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    //...
}

// still bad
function handleThings(opts) {
    if (opts === void 0) {
        opts = {};
    }
    // ...
}

// good
function handleThings(opts = {} {
    // ...
}