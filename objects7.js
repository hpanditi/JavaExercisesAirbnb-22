// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnPropert; // cache the lookup once, in module scope.

// ...
console.log(has.call(object, key));
