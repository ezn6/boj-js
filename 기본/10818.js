const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map((item) => +item);

solution(arr);

function solution(arr) {
  let max = arr[0];
  let min = arr[0];

  for (const i of arr) {
    if (i > max) max = i;
    else if (i < min) min = i;
  }

  console.log(min, max);
}
