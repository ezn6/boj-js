const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const re = input[0] * input[1] * input[2];

// console.log(String(re));
//17037300

solution(String(re));
function solution(re) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (re[j] == i) {
        arr[i] += 1;
      }
    }
  }
  console.log(arr.join('\n'));
}
