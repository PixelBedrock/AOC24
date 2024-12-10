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

// count how many times appears in right list
let rightSideCounts = {};

rightSide.forEach(number => {
  if (!rightSideCounts[number]) rightSideCounts[number] = 0;
  rightSideCounts[number] += 1;
});

// final result
let similarityScore = 0;

leftSide.forEach(number => {
  if (!rightSideCounts[number]) return;
  similarityScore += number * rightSideCounts[number];
});

console.log(similarityScore);