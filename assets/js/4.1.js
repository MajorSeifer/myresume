/*
This function take 2 parameters, a length and a width, and calculate his surface.
*/
function calcSurface(length, width) {
    return length * width;
}


/*
This function does the same than the calcSurface() but use arrow function.
*/
let calcSurfaceAlt = (length, width) => length * width;


/*
This is the function called when running the .js file.
It will ask a length and a width by the user.
*/
function exercise41() {
    let length = prompt("Please enter the length of the rectangle in cm")
    let width = prompt("Please enter the width of the rectangle in cm")
    alert("The surface of the rectangle is : " + calcSurfaceAlt(length, width) + " cm²");
}