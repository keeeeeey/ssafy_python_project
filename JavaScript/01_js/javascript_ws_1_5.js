const participantNums = [
  [1, 3, 2, 2, 1],
  [3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
  [9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35],
];

for (participantNum of participantNums) {
  const dict = {};
  participantNum.forEach((num) => {
    if (num in dict) {
      dict[num] += 1;
    } else {
      dict[num] = 1;
    }
  });

  for (key in dict) {
    if (dict[key] === 1) {
      console.log(key);
      break;
    }
  }
}

const result = (x, y) => x + y;
console.log(result(2, 3));

const tom = {
  name: "Tom",
  introduce() {
    console.log("Hi, my name is " + this.name);
  },
}
console.log(tom.introduce())