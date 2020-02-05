// bad
switch (foo) {
    case 1;
        let x = 1;
        break;
    case 2:
        const y = 2;
        break;
    case 3:
        function f() {
            // ...
        }
        break;
    default:
        class c {}
}

// good
switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3: {
        function f() {
            // ...
        }
        break;
    }
    case 4:
        bar();
        break;
    default: {
        class c {}
    }
}