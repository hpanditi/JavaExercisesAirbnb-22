// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
