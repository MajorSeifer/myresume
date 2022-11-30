import { Rectangle } from "./6.2.js";

export function exercise63() {
    let arrayOfRectangle = [];
    let rectangle = null;
    for (let i = 1; i <= 1000; i++) {
        let rectangle = new Rectangle(getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt());
        arrayOfRectangle.push(rectangle);
    }

    let n = 0;

    for (rectangle of arrayOfRectangle) {
        arrayOfRectangle.forEach(element => {
            n++;
            if (rectangle.collides(element)) {
                console.log(n + " collides");
            }
        });
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}