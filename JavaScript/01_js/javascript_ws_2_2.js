const users = [
  { name: "John", age: 31, isMarried: true, balance: 100 },
  { name: "Sarah", age: 22, isMarried: false, balance: 200 },
  { name: "Ashley", age: 25, isMarried: true, balance: 300 },
  { name: "Robert", age: 27, isMarried: false, balance: 400 },
  { name: "Tom", age: 35, isMarried: true, balance: 500 },
];

users.forEach((user) => console.log(user["name"]));

const married = users.filter((user) => user["isMarried"] === true);

const tom = users.find((user) => user["name"] === "Tom");

const newUsers = users.map((user) => {
  user["isAlive"] = true;
  return user
});

const totalBalance = users.reduce((acc, user) => acc + user["balance"], 0)
