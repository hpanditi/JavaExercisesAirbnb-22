// bad
function foo() {
    if (x) {
        return x;
    }   else {
        return y;
    }
}

// bad
function cats() {
    if (x) {
        return x;
    }   else if (y) {
        return y;
    }
}

// bad
function dogs() {
    if (x) {
        return x;
    }   else {
        if (y) {
            return y;
        }
    }
}

// good
function foo() {
    if (x) {
        return x;
    }

    return y;
}

// good
function cats() {
    if (x) {
        return x;
    }

    if (y) {
        return y;
    }
}

// good
function dogs(x) {
    if (x) {
        if (z) {
            return y;
        }
    } else {
    return z;
    }
}
