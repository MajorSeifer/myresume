function exercise34() {
    let array = [1, 2, 3, 4, 5];

    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    alert("Min value is " + minValue + " and Max value is " + maxValue);
}

function secondMethod(array) {

    let minValue = Infinity;
    let maxValue = -Infinity;

    array.forEach(element => {
        if (element < minValue) {
            minValue = element;
        }

        if (element > maxValue) {
            maxValue = element;
        }
    });
    alert("Min value is " + minValue + " and Max value is " + maxValue);

}