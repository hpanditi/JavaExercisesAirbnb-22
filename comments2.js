// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// also good
function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}