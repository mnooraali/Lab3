// const vs let vs var

// for (let i = 0; i < 10; i++) console.log(i);
// console.log(i);

// not defined - undefined
// let i;
// i=1

// const i; => error
//=============================================

// arrow functions

// function add(num1, num2) {
//     return num1 + num2
// }

// const add = function (num1, num2) {
//     return num1 + num2
// }

// const add =  (num1, num2)=> {
//     return num1 + num2
// }

// const add = (num1, num2) => num1 + num2

// array functions filter & map

// const numbers = [1, 2, 3, 4, 5, 6]

// const doubleNumbers = numbers.map(n => n * 2)

// const doubleNumbers = numbers.map(n => { return n * 2; })

// console.log(doubleNumbers);


// const trail = numbers.map(n => n % 2 !== 0)
// console.log(trail);

// implicit explicit return

//implicit return 
// const oddNumbers = numbers.filter(n => n % 2 !== 0)

//explicit return
// const oddNumbers = numbers.filter(n => { return n % 2 !== 0 })

//logical error
// const oddNumbers = numbers.filter(n => { n % 2 !== 0 }) // => []

// logical error
// const oddNumbers = numbers.filter(n => { return true })

// console.log(oddNumbers);

// destructuring

// const person = {
//     name: "Ahmed",
//     age: 25
// }

// const { name } = person

// const age = person.age

// const numbers = [1, 2, 3, 4]

// const first = numbers[0]
// const second = numbers[1]

// const [first, second] = numbers
// const [, second, ,forth] = numbers

// const myFunc = () => ["Ahmed", "Ali"]

// const result = myFunc();
// result[0] //=> Ahmed
// result[1] //=> Ali

// const [first, second] = myFunc();


// // reference and primitive types

// let x = 1;

// let y = x;

// x = 10

// console.log("x =>", x);
// console.log("y =>", y);

// const person = {  // 100
//     name: "Ahmed"
// } 

// const anotherPerson = person  // 100

// person.name = "Ali"

// console.log(person);

// console.log(anotherPerson);

// const person = {  // 100
//     name: "Ahmed"
// }

// const anotherPerson = { ...person }  // 200

// person.name = "Ali"

// console.log(person);

// console.log(anotherPerson);

// string literals

// const name  = "Ahmed";

// console.log("hello " + name)

// console.log(`hello ${name}`)

// console.log(`hello ${name === "Ahmed" ? "Ahmed Ali" : "Not here" }`)

// spread and rest operators

// const arr = [1, 2, 3, 4];

// const [first, ...others] = arr

// console.log(others);


// const myFuc = (...args)=>{
//     console.log(args);
// }

// myFuc(1, 2, 3, 4, 5)

// imports and exports

// import { logger } from "./utils"

// import x from "./utils"

// import x, { logger } from "./utils"

//===============================

// npm & npx

//==> npm init 
//==> generate package.json
//==> npm i <package-name>  // within the project 
    //==> update package.json dependencies
    //==> add package-lock.json 
    //==> add node_modules //=> must be added to .gitignore
//==> To install global package => npm i -g <package-name> //sudo
//Alternative
//npx create-react-app <app-name>

//to uninstall => npm un <package-name>


//========================

// Install nodejs
// clone the simplified app 
// npm i 