function exercise22() {
    let min = prompt("Please enter a min");
    let max = prompt("Please enter a max");
    let current = prompt("Please enter a current");

    if (current < max && current > min) {
        alert("It's true, you current number is between " + min + " and " + max + ".");
    } else {
        alert("Sorry, you current number is not between " + min + " and " + max + ".");
    }

}