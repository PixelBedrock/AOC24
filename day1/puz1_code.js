const fs = require("node:fs"), path = require("node:path");

// load the input file
let inputFilePath = path.join(__dirname, "day1_input.txt");
let inputBuffer = fs.readFileSync(inputFilePath);
let input = inputBuffer.toString();

// parse the input file content
const leftSide = [], rightSide = [];
let inputSplit = input.split("\n");

inputSplit.forEach(line => {
  let [left, right] = line.split("   ");
  leftSide.push(left);
  rightSide.push(right);
});

// sort both arrays
leftSide.sort();
rightSide.sort();

// do the math
const distances = [];

for (let i = 0; i < leftSide.length; i++) {
  let math = leftSide[i] - rightSide[i];
  if (math < 0) math = rightSide[i] - leftSide[i];
  distances.push(math);
}

// final result
let finalResult = 0;
distances.forEach(distance => finalResult += distance);
console.log(finalResult);