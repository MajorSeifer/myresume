function exerciseManhattan() {
    let x1 = prompt("Please enter coordinates x1")
    let y1 = prompt("Please enter coordinates y1")
    let x2 = prompt("Please enter coordinates x2")
    let y2 = prompt("Please enter coordinates y2")

    alert("The number of block(s) is " + manhattan(x1, y1, x2, y2) + " block(s).");

}

/*
*This function take two coordinates (x1, y1 and x2, y2).
* It returns the sum of the absolute value of the abscissa and ordinate.
* If we not use Math.abs, the return value could be negative.
* The return value is given in number of block(s).
*/
function manhattan(x1, y1, x2, y2) {
    let dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
    return dist;
}