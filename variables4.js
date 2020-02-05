// bad - unnecessary function call
function checkName(hasName) {
    const name = getName(); 

    if (hasName === 'test') {
        return false;
    }

    if (name === 'test') {
        this.setName('');
        return false;
    }

    return name;
}

// good
function checkName(hasName) {
    if (hasName === 'test') {
        return false;
    }

    const name = getName();

    if (name === 'test') {
        this.setName('');
        return false;
    }

    return name;
}