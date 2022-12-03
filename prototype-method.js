/**Prototype Methods */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  /**Getter */
  get area() {
    return this.calculateArea();
  }

  /**Method */
  calculateArea() {
    return this.width * this.height;
  }
}

const rec = new Rectangle(23, 4);
console.log(rec.area);

/**
 * OUTPUT: 92
 */
