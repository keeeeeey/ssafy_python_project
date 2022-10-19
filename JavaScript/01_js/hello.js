// console.log("hello, javascript")

// function add(num1, num2) {
//   return num1 + num2
// }

// console.log(add(2, 7))

// const sub = function (num1, num2) {
//   return num1 - num2
// }

// console.log(sub(2, 7))

// const greeting = function (name = "Anonymous") {
//   return `Hi ${name}`
// }

// console.log(greeting())

// const greeting = (name) => {
//   return `hello, ${name}`
// }

// const greeting = name => {
//   return `hello, ${name}`
// }

// const greeting = name => `hello, ${name}`

// (function (num) {
//   return num ** 3
// })(2)

// (num => num ** 3)(2)

const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers[-1])
console.log(numbers.length)
console.log(numbers[numbers.length - 1])

numbers.reverse()
console.log(numbers)
numbers.push(100)
console.log(numbers)
numbers.pop()
console.log(numbers)

console.log(numbers.includes(1))
console.log(numbers.includes(100))
console.log(numbers.indexOf(3))
console.log(numbers.indexOf(100))
console.log(numbers.join(" "))