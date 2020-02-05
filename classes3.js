// bad
Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
};

Jedi.prototype.setHeight = function (height) {
    this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

luke.jump()
    .setHeight(20);
    