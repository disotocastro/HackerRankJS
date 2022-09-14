"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // 07: 05:45 PM..... 8 y 9
  var time = "";

  var restOfTheTime = s.substring(3, 7);

  s;

  var amPm = s.charAt(8);

  if (amPm == "P") {
    if (s.substring(0, 2) == "12") {
      time = s.substring(0, 2);
    } else {
      time = parseInt(s.substring(0, 2)) + 12;
    }
  }
  if (amPm == "A") {
    if (s.substring(0, 2) == "12") {
      time = "00";
    } else {
      time = s.substring(0, 2);
    }
  }

  return time + s.substring(2, 8);
}

/**
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ... 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
 *
 *
 *
 *
 *
 */

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
