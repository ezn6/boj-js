const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputA = input[0].split(' ').map((item) => +item);
// const inputB = parseInt(input[1]);

solution(inputA[0]);
function solution(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
