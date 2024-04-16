// example 1
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve("The input is a number.");
    } else {
      reject("Error: The input is not a number.");
    }
  });
}

checkNumber(10)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Outputs: The input is a number.

// example 2: chaining promises
function doubleValue(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value * 2), 1000);
  });
}

doubleValue(5)
  .then((result) => doubleValue(result))
  .then((result) => doubleValue(result))
  .then((result) => console.log(result));

// Outputs: 40 after approximately 3000 milliseconds

// example 3: Promise.all
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Outputs: [3, 42, 'foo']
