// bad
function sayHi (name) {
    return 'How are you, ' + name + '?';
}

// bad 
function sayHi(name) {
    return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
    return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
    return `How are you, ${name}?`;
}