const fs = require("node:fs");

const content = fs.readFileSync("notes.txt", "utf-8");
// console.log(content);

// fs.writeFileSync("copy.txt", "I am writing my name Shivansh in this", "utf-8");
// fs.writeFileSync("copy.txt", content, "utf-8");

fs.appendFileSync("copy.txt", "Hello NodeJS", "utf-8");

fs.mkdirSync("games", { recursive: true });
fs.rmdirSync("games");

fs.unlinkSync("copy.txt");
