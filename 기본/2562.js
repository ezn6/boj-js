const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arr = input.map((item) => +item);

// console.log(arr);
solution(arr);

function solution(arr) {
  let max = 0;
  let cnt = 0;
  for (let i = 0; i < 9; i++) {
    if (arr[i] > max) {
      max = arr[i];
      cnt = i + 1;
    }
  }
  console.log(max + '\n' + cnt);
}
