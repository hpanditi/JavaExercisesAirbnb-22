class Jedi {
    constructor(options = {} {
        this.name = options.name || 'no name';
    }

    getName() {
        return this.name;
    }

    toString() {
        return `Jedi - ${this.getName()}`;
    }
}