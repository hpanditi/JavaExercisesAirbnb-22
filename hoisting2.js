function example() {
    console.log(anonymous); // => underfined

    anonymous(); // => TypeError anonymous is not a function

    var anonymous = function () {
        console.log('anonymous function expression');
    };
}