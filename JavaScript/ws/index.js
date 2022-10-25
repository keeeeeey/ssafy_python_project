// 코드를 작성해 주세요
const scoreATag = document.querySelector(".countA");
let scoreA = 0;
const scoreBTag = document.querySelector(".countB");
let scoreB = 0;

const buttonS = document.querySelector("#scissors-button");
const buttonR = document.querySelector("#rock-button");
const buttonP = document.querySelector("#paper-button");

const player1Choice = document.querySelector("#player1-img");
const player2Choice = document.querySelector("#player2-img");

// 0 1 2
// 번갈아가면서 이미지 바꾸기? % 연산 응용해보기
const cases = ["./img/scissors.png", "./img/rock.png", "./img/paper.png"];

function choosePlayer2(player1) {
  let idx = 0;

  function choose() {
    idx += 1
    idx %= 3;
    player2Choice.setAttribute("src", cases[idx])
  }

  const timer = setInterval(choose, 100);

  setTimeout(function () {
    clearInterval(timer);
    whoWin(player1, idx)
    abledBtn()
  }, 3200);
}

function disabledBtn() {
    buttonS.setAttribute("disabled", true)
    buttonR.setAttribute("disabled", true)
    buttonP.setAttribute("disabled", true)
}

function abledBtn() {
    buttonS.removeAttribute("disabled")
    buttonR.removeAttribute("disabled")
    buttonP.removeAttribute("disabled")
}

function whoWin(player1, player2) {
    if (player1 == player2) {
        return
    } else if (player1 === 0 && player2 === 2) {
        scoreA += 1
        scoreATag.innerText = scoreA
    } else if (player1 === 1 && player2 === 0) {
        scoreA += 1
        scoreATag.innerText = scoreA
    } else if (player1 === 2 && player2 === 1) {
        scoreA += 1
        scoreATag.innerText = scoreA
    } else {
        scoreB += 1
        scoreBTag.innerText = scoreB
    } 
}

buttonS.addEventListener("click", function (event) {
  disabledBtn()
  const url = cases[0];
  player1Choice.setAttribute("src", url);
  choosePlayer2(0);
});

buttonR.addEventListener("click", function (event) {
  disabledBtn()
  const url = cases[1];
  player1Choice.setAttribute("src", url);
  choosePlayer2(1);
});

buttonP.addEventListener("click", function (event) {
  disabledBtn()
  const url = cases[2];
  player1Choice.setAttribute("src", url);
  choosePlayer2(2);
});




































// 정해진 시간마다 주어진 콜백함수를 실행
// setInterval(f, time) f : 실행하고싶은 함수 / time : 시간 (ms 단위)
// setInterval(function () {}, 100);

// 정해진 시간 후에 콜백함수를 한번 실행
// setTimeout(f, time) f : 실행하고싶은 함수 / time : 시간 (ms 단위)
// setTimeout(function() {}, 1000);

// let count = 0;
// function add() {
//   console.log(count + "초");
//   count += 1;
// }
// 나중에 멈추고 싶다면 변수에 저장
// const timer = setInterval(add, 1000);

// 반복 중지
// clearInterval(timer);

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   clearInterval(timer);
// });

// setTimeout(function () {
//   console.log("10초 후 중단");
//   clearInterval(timer);
// }, 10000);
