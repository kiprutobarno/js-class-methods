/**A function expressoin with a name */
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

/**Passing a function as an argument to another function */
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

function cube(number) {
  return number * number * number;
}
const numbers = [1, 2, 3, 4, 5];
console.log(map(cube, numbers));

/**Anonymous function
 * With function hoisting
 */
console.log(square(6));
function square(number) {
  return number * number;
}

/**
 * Rest parameters allows indefinite number of arguments as an array
 */
function multiply(multiplier, ...args) {
  return args.map((x) => multiplier * x);
}
console.log(multiply(3, 1, 2, 3, 4, 5));

/**Arrow function */

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 5));

/** Anonymous arrow function */
const a = 3,
  b = 7;

const addition = () => {
  return a * b;
};
console.log(addition());
