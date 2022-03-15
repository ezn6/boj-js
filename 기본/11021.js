const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //입력전체를 다 읽어옴
input = input.split('\n');
// const input = input[0].split(' ').map((item) => +item);
const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((item) => +item);
  console.log(`Case #${i}: ${arr[0] + arr[1]}`);
}
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7
