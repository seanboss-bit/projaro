// let const

// const newAge = 09

// console.log(newAge)

// STRING NUMBER BOOLEAN NULL UNDEFINED

// const name1 = "esther";
// const numberStrung = "30";
// const age = 45;
// const isCool = true;
// const type = null;
// let unicorn;

// console.log('my name is ' + isCool)
// console.log(`my name is ${name1} and i am ${age}`);

// console.log(name1);

// const number = [30,"james", true];

// console.log(number[1]);

// const fruits = ['apple', "watermelon"]

// console.log(number);

// OBJECT

// const person = {
//   name: "james",
//   age: 30,
//   hobbies: ["swimming", "sleeping"],
//   address: {
//     town: "abuja",
//   },
// };

// console.log(person.age);

// const { name, hobbies, address } = person;

// console.log(name);
// console.log(address.town)

const todoList = [
  {
    id: 1,
    todo: "Meeting with boss",
    isComplete: true,
  },
  {
    id: 2,
    todo: "dentist appointment",
    isComplete: true,
  },
  {
    id: 3,
    todo: "Taking out trash",
    isComplete: false,
  },
];

// console.log(number);

// console.log(todoList);

// // LOOPS
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// ALERTS

// alert(`welcome ${name1}`);

// let name = Boolean(prompt("Enter Age"))

// console.log(name)

// console.error('this is a test error')

// FOREACH MAP FILTER
// for(let i = 0; i < todoList.length; i++){
//   console.log(todoList[i].todo)
// }

// todoList.forEach(function (item) {
//   console.log(item.todo)
// })

// const listItem = todoList.map(function (todo) {
//   return todo.todo;
// })

// console.log(listItem)

// const isDone = todoList.filter(function (todo) {
//   return todo.isComplete === true
// }).map(function (todo) {
//   return todo.todo
// })

// console.log(isDone);

const x = 10;
const y = 11;

// if (x === 10 && y === 11) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// {
//   x === 10 && y === 11 ? console.log("yes") : console.log("no");
// }

// const color = "green";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;

//   default:
//     console.log("color is not red or blue");
//     break;
// }

// FUNCTIONS

// function addNum(num1, num2) {
//   console.log(num1 * num2);
// }

// addNum(5, 100);

// const sean = (num1, num2) => console.log(num1 * num2);

// sean(2, 6);

// const fruits = ['strawberry', 'apple']
// console.log(fruits);

// function Person(firstname, lastname, dob) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
//   this.getyear = () => new Date(dob).getFullYear()
//   this.getFullName = () => {return `${firstname} ${lastname}`}
// }

// const person1 = new Person("mary", "james", '4-5-1980');

// // Person.prototype.push(person1.getyear)

// console.log(person1.getFullName());

const companies = [
  { name: "comapny 1", category: "Finance", start: "1980", end: "2000" },
  { name: "comapny 2", category: "Retail", start: "1960", end: "2000" },
  { name: "comapny 3", category: "Technology", start: "1990", end: "2000" },
  { name: "comapny 4", category: "Retail", start: "1920", end: "2000" },
  { name: "comapny 5", category: "Technology", start: "1940", end: "2000" },
  { name: "comapny 6", category: "Retail", start: "1950", end: "2000" },
  { name: "comapny 7", category: "Technology", start: "1967", end: "2000" },
  { name: "comapny 8", category: "Finance", start: "1983", end: "2000" },
  { name: "comapny 9", category: "Auto", start: "1973", end: "2000" },
  { name: "comapny 10", category: "Auto", start: "170", end: "2000" },
  { name: "comapny 11", category: "Auto", start: "1509", end: "2000" },
];

const ages = [33, 48, 13, 16, 19, 25, 39, 40, 23, 56, 78, 96];

const canDrink = ages.filter((age) => {
  return age > 21;
});

// companies.map((company) => {
//   console.log(company.name);
// });

// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i].name)
// }

// console.log(companies.length);

// const log = (id,name) => {
//   console.log(`my name is ${name} an my id is ${id}`)
// }
// log(405, 'sean')

// function logged () {

// }
// const log = (x, y, operator) => {
//   // if (operator === "*") {
//   //   console.log(x * y);
//   // } else if (operator === "-") {
//   //   console.log(x - y);
//   // } else if (operator === "+") {
//   //   console.log(x + y);
//   // } else {
//   //   console.log(x / y);
//   // }

//   switch (operator) {
//     case "+":
//       console.log(x + y);
//       break;
//     case "-":
//       console.log(x - y);
//       break;
//     case "*":
//       console.log(x * y);
//       break;

//     default:
//       console.log(x / y);
//       break;
//   }
// };
// log(10, 11, "-");

let name = prompt("Enter name");
let age = prompt("Enter Age");
let isFacemask = prompt("Are You wearing facemask");

if (age > 12 && isFacemask === "yes") {
  alert(`Welcome Mr/Mrs ${name} to my mall`);
} else if (age > 12 && isFacemask === "no") {
  alert(`Mr/Mrs ${name} you need a face mask to enter`);
} else {
  alert(`you are below age to enter`);
}
