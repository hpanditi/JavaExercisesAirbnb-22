// bad
const itemHeight = item => item.height > 256 ? item.largeSize: item.smallSize;

// bad
const itemHeight = (item) => item.height > 256 ? item.largeSize: item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
    const { height, largeSize, smallSize } = item;
    return height > 256 ? largeSize : smallSize;
};
