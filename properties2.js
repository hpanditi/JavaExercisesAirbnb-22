const luke = {
    jedi: true,
    age: 28,
};

function getProp(prop) {
    return luke[prop];
}

const isJedi = getProp('jedi');
