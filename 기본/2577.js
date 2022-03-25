const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const total = input[0] * input[1] * input[2];

// console.log(String(re));
//17037300

solution(String(total));
function solution(total) {
  let re = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i <= 9; i++) {
    re[total[i]] += 1;
  }
  console.log(re.join('\n'));
}
