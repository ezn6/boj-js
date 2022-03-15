const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputA = input[0].split(' ').map((item) => +item);
const inputB = parseInt(input[1]);

// console.log(inputA[0], inputA[1], inputB);

solution(inputA[0], inputA[1], inputB);
function solution(h, m, c) {
  m += c;
  if (m >= 60) {
    h = h + parseInt(m / 60);
    m = m % 60;
  }
  if (h >= 24) {
    h -= 24;
  }
  console.log(h, m);
}
