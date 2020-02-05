// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
    // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HttpRequests = [
    // ...
];

// also good
const HttpRequests = [
    // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
    // ...
];
