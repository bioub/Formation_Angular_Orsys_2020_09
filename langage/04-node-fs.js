const fs = require("fs");

// SYNC
try {
  const buffer = fs.readFileSync(".editorconfig");
  fs.writeFileSync(".editorconfig.copy", buffer);
  console.log("COPY DONE");
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell / Pyramid of Doom
fs.readFile(".editorconfig", (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".editorconfig.copy", buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("COPY DONE");
      }
    });
  }
});

// ASYNC Promise
// d'abord via des libs comme BlueBird, devenu natif dans ES2015
// fs permet d'utiliser les promesses depuis Node 12
fs.promises.readFile(".editorconfig")
  .then((buffer) => fs.promises.writeFile(".editorconfig.copy", buffer))
  .then(() => console.log("COPY DONE"))
  .catch((err) => console.log(err))

// ASYNC functions ES2017
async function copy() {
  try {
    const buffer = await fs.promises.readFile(".editorconfig");
    await fs.promises.writeFile(".editorconfig.copy", buffer);
    console.log("COPY DONE");
  } catch (err) {
    console.log(err);
  }
}

copy();

