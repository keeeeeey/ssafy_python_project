// 1-1
const savedFile = {
  name: "profile",
  extension: "jpg",
  size: 29930,
};
function fileSummary(file) {
  const { name } = file
  const { extension } = file
  const { size } = file
  
  console.log(
    `The file ${name}.${extension} is size of ${size} bytes.`
  );
}
fileSummary(savedFile);

// 1-2
const data = {
  username: "myName",
  password: "myPassword",
  email: "my@mail.com",
};

const { username } = data
const { password } = data
const { email } = data


// 2
function addNumbers(...args) {
  const numbers = [...args];
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// 3-1
const favoriteColors = ["navy", "black", "gold", "white"];
// const palette = defaultColors.concat(myFavoriteColors);
const defaultColors = ["red", "green", "blue", ...favoriteColors];

// // 3-2
const info2 = { isMarried: true, balance: 3000 };
// const fullInfo = Object.assign(info1, info2);
const info1 = { name: "Tom", age: 30, ...info2 };
