// bad - raises exception
const luke = {}
const leia = {}
[luke, leia].forEach(jedi => jedi.father = 'vader')

// bad - raises exception
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
    // handle `leia`,  `lando`, `chewie`, `r2`, `c3p0`
    // ...
}())

// bad - returns `undefined` instead of the value on the next line - always happens when `return`
function foo() {
    return
        'search your feelings, you know it to be foo'
}

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
});

// good
const reaction = "No! That's impossible!";
(async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
}());

// good
function foo() {
    return 'search your feelings, you know it to be foo';
}
