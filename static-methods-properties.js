class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**static property */
  static displayName = "Point A";

  /**static method */
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const point1 = new Point(5, 5);
const point2 = new Point(10, 10);

/**
 * Static members are called without instantiating their class
 */
console.log(Point.displayName);
console.log(Point.distance(point1, point2));

/**
 * OUTPUT:
 * Point A
 * 7.0710678118654755
 */
