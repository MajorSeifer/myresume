/*
This function generate a random Integer between a given range.
This example use a range from 1 to 10.
*/
function rand10(value1, value2) {

    min = Math.ceil(value1);
    max = Math.floor(value2);

    return Math.floor(Math.random() * (max - min) + min);
}

function exercise42() {
    alert(rand10(1, 10));
}