const { interval } = require("rxjs");
const { filter, map, tap, take } = require("rxjs/operators");

// ----0----1----2----3----4----5 --...
// filter((val) => val % 2 === 1)
// ---- ----1---- ----3---- ----5 --...
// map((val) => val * 2)
// ---- ----2---- ----6---- ----10--...
// tap((val) => console.log('Hello'))
// ---- ----2---- ----6---- ----10--...
// take(2)
// ---- ----2---- ----6|

interval(1000)
  .pipe(
    filter((val) => val % 2 === 1),
    map((val) => val * 2),
    tap((val) => console.log("Hello")),
    take(2)
  )
  .subscribe((val) => console.log(val));
