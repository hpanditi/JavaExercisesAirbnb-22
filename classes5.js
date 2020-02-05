// bad
class Jedi {
    constructor() {}

    getName() {
        return this.name;
    }
}

// bad
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
    }
}

// good
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey';
    }
}