class Jedi {
    constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
    }

    set(key, val) {
        this[key] = val;
    }

    get(key) {
        return this[key];
    }
}