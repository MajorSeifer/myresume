export class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (otherRectangle.topLeftXPos < this.topLeftXPos + this.width
            && otherRectangle.topLeftXPos + otherRectangle.width > this.topLeftXPos
            && otherRectangle.topLeftYPos < this.topLeftYPos + this.length
            && otherRectangle.topLeftYPos + otherRectangle.length > this.topLeftYPos) {
            return true;
        }
    }
}

export function exercise62() {
    let rectangle1 = new Rectangle(0, 0, 10, 20);
    let rectangle2 = new Rectangle(0, 0, 10, 20);
    let rectangle3 = new Rectangle(10, 0, 10, 20);
    let rectangle4 = new Rectangle(0, 10, 10, 20);

    let arrayOfRectangle = [];
    arrayOfRectangle.push(rectangle1);
    arrayOfRectangle.push(rectangle2);
    arrayOfRectangle.push(rectangle3);
    arrayOfRectangle.push(rectangle4);

    arrayOfRectangle.forEach(element => {
        if (rectangle1.collides(element) == true) {
            console.log("It collides.");
        } else {
            console.log("It not collides.")
        }
    });
}
