function exercise27() {

    let n = prompt("Please enter a number");
    calculateSum(n);

}

function calculateSum(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        let newNumber = prompt("Please enter a new number")
        sum = sum + Number(newNumber);
    }
    alert(sum);
}