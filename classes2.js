// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    queueMicrotask.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
    return this.queue[0];
};

// good
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}