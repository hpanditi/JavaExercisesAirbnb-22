// bad
function concatenateAll() {
    const arts = Array.prototype.slice.call(arguments);
    return arguments.join('');
}

// good
function concatenateAll(...args) {
    return args.join('');
}