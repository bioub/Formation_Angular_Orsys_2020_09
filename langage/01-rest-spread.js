// ES2015 REST
// conversion : liste de valeurs -> array
function sum(a, b, ...others) {

  // this pseudo variable
  // arguments pseudo variable
  let result = a + b;

  for (const n of others) {
    result += n;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 3

// ES2015 SPREAD
// conversion : array -> liste de valeurs

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];

console.log(multiply(...nbs));

// ES2015 SPREAD
const clone = [0, ...nbs, 5];

// ES2018 SPREAD
// conversion : objets -> liste de clé/valeurs
const coords = {x: 1, y: 2};
const cloneCoords = {...coords, z: 3};
