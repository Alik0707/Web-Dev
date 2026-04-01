const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let arr = JSON.parse(input);


console.log(JSON.stringify(arr.filter(n => n % 2 !== 0)));


