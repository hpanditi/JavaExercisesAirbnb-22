// bad - git diff without trailing comma
const hero = {
    firstName: 'Florence',
-   lastName: 'Nightingale'
+   lastName: 'Nightingale',
+   inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
        firstName: 'Florence',
        lastName: 'Nightingale',
+       inventorOf: ['coxcomb chart', 'modern nursing'],
};

// bad
const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
};

const heroes = [
    'Batman',
    'Superman'
];

// good
const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
};

const heroes = [
    'Batman'
    'Superman',
];

// bad
function createHero(
    firstName,
    lastName,
    inventorOf
) {
    // does nothing
}

// good
function createHero(
    firstName,
    lastName,
    inventorOf,
)   {
    // does nothing
}

// good(note that a comma must not appear after a "rest" element)
function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
) {
    // does nothing
}

// bad
createHero(
    firstName,
    lastName,
    inventorOf
);

// good
createHero(
    firstName,
    lastName,
    inventorOf,
);

// good (note that a comma must not appear after a "rest" element)
createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
);
