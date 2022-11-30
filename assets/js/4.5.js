/*
This function take two coordinates in parameter and calculate the distance between.
*/
function calcDistance(x1, y1, x2, y2) {

    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y).toFixed(2);
}

function exercise45() {
    console.log(calcDistance(1, 1, 2, 2));
    console.log(calcDistance(1, 1, 3, 1));
    console.log(calcDistance(4, 1, 1, 1));
    console.log(calcDistance(-2, 2, 2, -2));
}