const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let arr = JSON.parse(input);

function sumPosNum(arr){
    return arr.filter(x => x > 0).reduce((sum,x) => sum + x,0);
}

console.log(sumPosNum(arr));


