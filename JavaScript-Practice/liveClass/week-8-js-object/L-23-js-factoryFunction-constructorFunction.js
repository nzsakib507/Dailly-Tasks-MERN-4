// let person1 = {
//     name: 'Nazmus Sakib',
//     address: 'Rajshahi',
//     age: 54,
//     interest: ['sakib', 'book', 'bike'],
// }
// let person2 = {
//     name: 'Saidur rahman setu',
//     address: 'Rajshahi',
//     age: 54,
//     interest: ['sakib', 'book', 'bike'],
// }
// so if we want to make this kmind of objects... than..


// 1. Factory Function
// factory function is a simple function which returns a object by which we can create object..

// function createPerson(name, age, interest) {
//     return {
//         name: name,
//         age: age,
//         interest: interest,
//         sayHello: function () {
//             console.log('Hello');
//         }
//     };

// shortcut

// return {
//     name,
//     age,
//     interest
// };
// }

// let person1= createPerson('saidur rahman setu', 25, ['js','c++']);
// let person2= createPerson('sakib', 26, ['c++', 'python', 'react']);
// person1.addr = 'raj';

// console.log(person1);



// 2. Constructor Function
// camelcaseing => firstName
// pasclecase => FirstName

// function CreatePerson(name, age, interest) {
//     // person1.name = name,
//     // person1.age = age,
//     // person1.interest = interest

//     // but we dont know that the name will be person2 so.......

//     (this.name = name),
//     (this.age = age),
//     (this.interest = interest) ;
// }

// {} = new; new keyword is refers to a new object

// let person1 = new CreatePerson('saidur rahman setu', 28, ['Js','python','c++']);

// console.log(person1);


// now we will see a different syntax of constructor function

// class

// class CreatePerson {
//     constructor(name, age, interest) {
//         (this.name = name),
//             (this.age = age),
//             (this.interest = interest),
//             (this.hello2 = function () {
//                 console.log('hello2');
//             });
//     }
//     sayHello() {
//         console.log('Hello', this.name);
//     }
// }

// let person1 = new CreatePerson('saidur rahman setu', 28, ['Js','python','c++']);

// console.log(person1);
// person1.sayHello();
// console.log(person1.name);

// this is instance .. we are creating a instance of CreatePerson which name is person 1
// a constructor function will be invocked in a CreatePerson..
// consteuctor is a build in in keyword function. so dont need to use function keyword.
// there is no need to use function keyword in a class constructor .. just say functionName() {task};

// to overwrite sayHello function

// person1.sayHello = function (){

// }


// amra sayHello te function banai invock korlam.. kentu amon jodi hoto jeta banalei invock hoia jabe..
// iffy= immideatly invocked function expression

// (function sayHello() {
//     console.log("hello world");
// }) ();

// but 

// (() => {
//     console.log("hello world");
// }) ();

// arrow funcrion on iffy

// (sayHello2 = () => {
//     console.log('hello raj');
// })();



// ((name) => {
//     console.log(`hello ${name}`, name);
// }) ('sakib');


// if i want to invock a function after a time duration ...

// setInterval(function () {
//     console.log('hello world');
// }, 2000);
// this function will print hello world after 2 sec amd will continue..
