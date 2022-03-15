const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //입력전체를 다 읽어옴
input = input.split('\n');
// const input = input[0].split(' ').map((item) => +item);
const testCaseNum = +input[0];
// console.log(testCaseNum);

for (let i = 1; i <= testCaseNum; i++) {
  let re = '';
  for (let j = 1; j <= i; j++) {
    re = re + '*';
  }
  console.log(re);
}
