const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = input.split('\n');

solution(input[0]);

function solution(n) {
  //n은 string
  let re = n;
  let cnt = 0;
  let cal = '';
  while (true) {
    if (n === '0') {
      console.log(1);
      break;
    }

    if (re.length === 1) {
      re = '0' + re;
    }

    cal = '';
    cal = +re[0] + +re[1];
    cal = String(cal);

    if (cal.length === 1) {
      re = re[1] + cal;
    } else {
      re = re[1] + cal[1];
    }

    cnt++;
    if (+re == +n) {
      console.log(cnt);
      break;
    }
  }
}
