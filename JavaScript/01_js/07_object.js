// const myInfo = {
//     name: "jack",
//     phoneNumber: "01012345678",
//     "samsung products": {
//         buds: "Galaxy Buds pro",
//         galaxy: "Galaxy s99",
//     },
// }

// console.log(myInfo.name)
// console.log(myInfo.phoneNumber)
// console.log(myInfo["samsung products"])
// console.log(myInfo["samsung products"].buds)

// const obj = {
//   name: "jack",
//   greeting() {
//     console.log("Hi!")
//   }
// }

// obj.greeting()

const jsonData = {
    coffee: "Americano",
    iceCream: "Mint Choco",
}

// Object -> json
const objToJson = JSON.stringify(jsonData)
console.log(objToJson)
console.log(typeof objToJson)

// json -> object
const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj)
console.log(typeof jsonToObj)
console.log(jsonToObj.coffee)