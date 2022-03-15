const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const inputA = input[0].split(' ').map((item) => +item);
// const inputB = parseInt(input[1]);

console.log(inputA[0]);
function solution(n) {
  let re = 0;
  for (let i = 1; i <= n; i++) {
    re = re + i;
  }
  console.log(re);
}
