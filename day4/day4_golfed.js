one = require("fs").readFileSync("passports.txt", "utf-8")
    .split("\r\n\r\n")
    .reduce((x, y) => x + (y.split(/[ \n]/).length - (y.includes("cid")) == 7), 0)

console.log("Part 1: " + one)

