const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
// function solution(H, M) {
//   if (M < 45 && H > 0) {
//     H -= 1;
//     M = M + 60 - 45;
//     console.log(H, M);
//     return;
//   } else if (M < 45 && H === 0) {
//     H = 23;
//     M = M + 60 - 45;
//     console.log(H, M);
//     return;
//   } else if (M > 45 && H > 0) {
//     M -= 45;
//     console.log(H, M);
//     return;
//   } else if (M > 45 && H === 0) {
//     M -= 45;
//     console.log(H, M);
//     return;
//   } else if (M === 45) {
//     M = 0;
//     console.log(H, M);
//     return;
//   }
// }

//omg...

function solution(H, M) {
  M -= 45;
  if (M < 0) {
    M += 60;
    H -= 1;
  }
  if (H < 0) {
    H = 23;
  }
  console.log(H, M);
}
