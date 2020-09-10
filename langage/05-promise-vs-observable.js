function timeout(delay) {
  return new Promise((resolve) => {
    // ce callback est appelé au moment du new Promise
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

timeout(1000).then(() => console.log("1s timeout"));

const { Observable } = require("rxjs");

function interval(delay) {
  return new Observable((observer) => {
    // ce callback est appelé au moment du subscribe
    setInterval(() => {
      observer.next();
    }, delay);
  });
}

interval(1000).subscribe(() => console.log("1s interval"));
