const steps = number => {
    let stairs = "";

    for (let row = 0; row < number;
row++) {
    let stair = "";

    for (let column = 0; column <
number; column++)
            stair += column <= row ? "#"
: " ";

        stair += stair + "\n";
    }

    return stairs;
};