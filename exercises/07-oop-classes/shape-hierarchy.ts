// Exercise: Shape Hierarchy
//
// Practice: abstract classes, inheritance, method overriding, super.
//
// 1. Create an abstract class Shape with:
//    - A constructor that takes a color (string)
//    - An abstract method getArea(): number
//    - A concrete method describe() that returns:
//      "A <color> <shapeName> with area <area to 2 decimals>"
//    - An abstract method get shapeName(): string  (getter)
//
// 2. Create three subclasses:
//    - Circle(color, radius)       — area = π * r²
//    - Rectangle(color, w, h)      — area = w * h
//    - Triangle(color, base, h)    — area = (base * h) / 2
//
// Example:
//   const c = new Circle("red", 5);
//   c.getArea()    // 78.539...
//   c.describe()   // "A red Circle with area 78.54"
//
//   const r = new Rectangle("blue", 4, 6);
//   r.describe()   // "A blue Rectangle with area 24.00"
//
//   const t = new Triangle("green", 10, 5);
//   t.describe()   // "A green Triangle with area 25.00"

// Your code here


// Test your implementation:
// const shapes: Shape[] = [
//   new Circle("red", 5),
//   new Rectangle("blue", 4, 6),
//   new Triangle("green", 10, 5),
// ];
// shapes.forEach(s => console.log(s.describe()));
