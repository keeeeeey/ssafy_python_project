const colors = ["red", "blue", "green"]

const printColor = function (color) {
    console.log(color)
}

for (const color of colors) {
    printColor(color)
}

// 1.
colors.forEach(printColor)

// 2. 
colors.forEach(function (color) {
    console.log(color)
})

// 3.
colors.forEach((color) => {
    console.log(color)
})

// 4.
colors.forEach((color) => console.log(color))