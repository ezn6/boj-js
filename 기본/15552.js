const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = input.split('\n');
// const input = input[0].split(' ').map((item) => +item);
const testCaseNum = +input[0];
let result = '';
solution();

function solution() {
  for (let i = 1; i <= testCaseNum; i++) {
    const arr = input[i].split(' ').map((item) => +item);
    let num = arr[0] + arr[1];
    result = result + num + '\n';
  }
  console.log(result);
}
