function exercise25() {

    let number = prompt("What is your favorite number?");

    while (number != 42) {

        let number = prompt("Are you sure, What is your favorite number?");
        if (number == 42) {
            break;
        }
    };
}