// bad
import foo from 'foo';
// ... some other imports ... //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named 2 } from 'foo';

// good
import foo, {
    named1,
    named2,
} from 'foo';
