class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}

class Snake extends Monster {
  bite(snake) {
    snake.health -= 10;
  }
}

// 아래 코드는 확인용 입니다.
const conda = new Snake({ name: "conda" });
const boa = new Snake({ name: "boa" });

console.log(conda.health); // 100
boa.bite(conda);
console.log(conda.health); // 90
