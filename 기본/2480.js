const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputA = input[0].split(' ').map((item) => +item);
// const inputB = parseInt(input[1]);

solution(inputA[0], inputA[1], inputA[2]);
function solution(a, b, c) {
  if (a === b && a === c) {
    console.log(10000 + a * 1000);
  } else if (a === b && a !== c) {
    console.log(1000 + b * 100);
  } else if (b === c && a !== c) {
    console.log(1000 + b * 100);
  } else if (a === c && a !== b) {
    console.log(1000 + a * 100);
  } else if (a !== b && b !== c && a !== c) {
    const max = Math.max(a, b, c);
    console.log(max * 100);
  }
}
