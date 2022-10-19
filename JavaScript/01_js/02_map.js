const numbers = [1, 2, 3, 4, 5]

const doubleElement = function (number) {
  return number * 2
}

// 1.
const newArr = numbers.map(doubleElement)
console.log(newArr)

// 2.
const newArr2 = numbers.map(function (number) {
  return number * 2
})
console.log(newArr2)

// 3.
const newArr3 = numbers.map(number => {
  return number * 2
})
console.log(newArr3)

// 4.
const newArr4 = numbers.map(number => number * 2)
console.log(newArr4)