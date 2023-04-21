let cal = 0;
let calMaster = 0;

function fibonacci(n) {
  cal++;
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster(n) {
  let cache = {};

  return function fib(n) {
    calMaster++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const ms = fibonacciMaster();
const num = 20;
