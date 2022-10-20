const numbers = [90, 90, 80, 77]

const sum = numbers.reduce(function (total, x) {
  return total + x
}, 0)

console.log(sum)

const sum2 = numbers.reduce((total, x) => total + x, 0)
console.log(sum2)
