// function person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         return "Hi, I'm " + this.name + " and I'm" + this.age
//     }
// }
// let person1 = new person("Saad", 17)
// let person2 = new person ("Wasif", 12)

// console.log(person1.greet());

// function person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// person.prototype.greet = function () {
//     return "Hi I'm " + this.name + " and I'm " + this.age + " years old" 
// }
// let person1 = new person("Muhummad", 13)

// console.log(person1.greet());


//   class    Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// const person1 = new Person("Ali", 20);
// console.log(person1.greet());

// class person {
//     constructor(name , age ){
//         this.name = name,
//         this.age = age
//     }
    
//     greet(){
//         return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//     }
// }
//  let person1 = new person("azan",89)
//  console.log(person1.greet());
 
// const fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits);


// let fruits = ["apple", "Mango"]
// fruits.push("orange")

// fruits.pop()
// console.log(fruits);

// const fruits = ["Apple", "azan"];

// // Add to end
// fruits.push("banana");

// // Remove last
// fruits.pop();

// console.log(fruits);


// const fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();

// fruits.push("azan")

// console.log(fruits);

// const fruits = ["Banana", "Mango"];
// fruits.shift()
// fruits.unshift("Apple");

// console.log(fruits); // ["Apple", "Banana", "Mango"]


// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Apple")); // 1

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.includes("orange")); // true

// const numbers = [10, 20, 30, 40];

// const result = numbers.slice(1 , 3);

// console.log(result); // [20, 30]


// const numbers = [10, 20, 30,90];

// // Remove 1 item at index 1
// numbers.splice(1);

// console.log(numbers); // [10, 30]

// let numbers = [91,27,98,75,87]
// let even = numbers.filter(num => num % 2 ==! 0)

// console.log(even);

// let num = [10,20,30]
// let result = num.find(num => num > 15)

// console.log(result);

let number = [10, 20, 30, 40]
let result = number.reduce((total,num) => total + num, 0)

console.log(result);
