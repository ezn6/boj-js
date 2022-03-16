const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //입력전체를 다 읽어옴
input = input.split('\n');
// const [N, X] = input[0].split(' ').map((item) => +item);
// const arr = input[1].split(' ').map((item) => +item);
let re = '';
// console.log(input);
solution(input);

function solution(arr) {
  let i = 0;
  while (true) {
    const [a, b] = arr[i].split(' ').map((item) => +item);

    re = re + String(a + b) + '\n';
    i++;
    if (i === arr.length - 1) {
      break;
    }
  }
  console.log(re);
}
