async function copy() {
  try {
    const buffer = await fs.promises.readFile(".editorconfig");
    await Promise.all([
      fs.promises.writeFile(".editorconfig.copy1", buffer),
      fs.promises.writeFile(".editorconfig.copy2", buffer),
    ]);
    console.log("COPY DONE");
  } catch (err) {
    console.log(err);
  }
}

copy();
