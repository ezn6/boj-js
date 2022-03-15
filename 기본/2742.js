const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //입력전체를 다 읽어옴
input = input.split('\n').map((item) => +item);
let re = '';

solution(input[0]);
function solution(n) {
  for (let i = n; i >= 1; i--) {
    re = re + String(i) + '\n';
  }
  console.log(re);
}
