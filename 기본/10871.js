const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //입력전체를 다 읽어옴
input = input.split('\n');
const [N, X] = input[0].split(' ').map((item) => +item);
const arr = input[1].split(' ').map((item) => +item);

solution(X, N);
function solution(x) {
  const newarr = arr.filter((item) => x > item);
  console.log(newarr.join(' '));

  //다른방법
  // let newarr = [];
  // for (let i = 0; i < N; i++) {
  //   if (arr[i] < x) {
  //     newarr.push(arr[i]);
  //   }
  // }
  // console.log(newarr.join(' '));
}
