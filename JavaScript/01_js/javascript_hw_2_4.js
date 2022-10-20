// 이곳에 코드를 작성합니다.
const inputs = [
  [3, 10, 5, [1, 3, 5, 7, 9]], // 3
  [3, 10, 5, [1, 3, 7, 8, 9]], // 0
  [5, 20, 5, [4, 7, 9, 14, 17]], // 4
];

function solution(K, N, M, chargers) {
  // solution 함수 완성
  const busStopList = new Array(N + 1).fill(0);

  for (charger of chargers) {
    busStopList[charger] = 1;
  }

  let cnt = 0;
  let battery = K;
  let now = 0;
  let flag = false;
  while (true) {
    let stop = 0;
    for (let i = now + 1; i <= now + battery; i++) {
      if (i === N) {
        flag = true;
        break;
      }

      if (busStopList[i] === 1) {
        stop = i;
      }
    }

    if (flag) {
      break;
    }

    if (stop) {
      now = stop;
      cnt += 1;
    } else {
      cnt = 0;
      break;
    }
  }

  console.log(cnt);
}

for (const input of inputs) {
  solution(input[0], input[1], input[2], input[3]);
}
