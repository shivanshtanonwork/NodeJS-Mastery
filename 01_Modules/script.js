const fs = require("node:fs");

console.log("Start of script");

// Sync - Blocking Operatio
// const contents = fs.readFileSync("notes.txt", "utf-8");

// console.log("Contents", contents);

// Async - Non Blocking Operation

fs.readFile("notes.txt", "utf-8", function (error, data) {
  if (error) console.log(error);
  else console.log("Content got:", data);
});

console.log("End of Script");
