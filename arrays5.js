// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
