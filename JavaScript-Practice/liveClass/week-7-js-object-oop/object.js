
// property
// Method

// keyword and value creates a pair/property

// let person = {
//     name: 'Nazmus Sakib',
//     address: 'Rajshahi',
//     interest: ['sakib', 'book', 'bike'],
//     sayHello: function () {
//         console.log('Books is in a ....');
//     }
// }

// for (let el in person) {
//     // console.log(el);
//     // console.log(typeof el);
//     console.log(person[el]);
// }

// for (let el in person) {
//     if (typeof person[el] == 'function') {
//         person[el]();
//     } else {
//         console.log(person[el]);
//     }
// }

// console.log(person);
// console.log(person.name);
// console.log(person['name']);

// person.sayHello();
// person['sayHello']();

// person.favLang = 'JS';
// delete person.address;

// console.log(person);

// ================================================================================


// let calculator = {
//     add(num1, num2) {
//         return num1 + num2;
//     },
//     minus(num1, num2) {
//         return num1 - num2;
//     },
//     multiply(num1, num2) {
//         return num1 * num2;
//     },
//     divide(num1, num2) {
//         return num1 / num2;
//     },
// }
// console.log(calculator.add(5,10));
// console.log(calculator.minus(5,10));
// console.log(calculator.multiply(5,10));
// console.log(calculator.divide(5,10));


// console.log(Math.max(4, 200, 466, 10,26, 255));


// function adder (...nums) {
//     let result=0;
//     for (let i=0; i<nums.length; i++){
//         result += nums[i];
//     }
//     return result;
// }

// console.log(adder(5,10,56,12));

// let nums= [5,10,23,14];
// console.log(adder(...nums));
// array ke indivizual element a create korchi..

// task calculate(5, '**', 10);


// ================================================================================

// let arr= [1,2,3,4,5,6];

// console.log(...arr);  //this will get me all the element on array.comma seperated value.

// let arr2=arr;

// let arr2=[];
// for (let el of arr) {
//     arr2.push(el);
// }
// console.log(arr2);

// or
// let arr2= [...arr];
// console.log(arr2);

// or
// let arr2=[];
// arr2.push(...arr);
// console.log(arr2);

// ================================================================================

// This keyword

// let person = {
//     name: 'saidur rahman setu',
//     addr: {
//         city: 'manikganj',
//         zip: 1800
//     },
//     interest: ['js', 'pithon', 'c', 'react'],
//     sayHello() {
//         // console.log('Hello', person.name);
//         console.log('Hello', this.name);
//     },

//     // this is without arrow function
//     // printInterest() {
//     //     this.interest.forEach(function (el) {
//     //         // console.log(el);
//     //         console.log(this.name+ ' loves ' + el);
//     //     }, this); //we can write person in place of this.

//     // this is with arrow function
//     printInterest() {
//         this.interest.forEach( (el) => {
//             // console.log(el);
//             console.log(this.name+ ' loves ' + el);
//         }); //we can write person in place of this.
//     },
// }

// person.printInterest();

// person.sayHello();
// person2.sayHello();


// this can be invocked in 2 way
// function => global object  = build in node object
// Method/object => parent object  

// arrow function
// let sayHello = (name) => {
//     return 5;
// }
// sayHello();
// console.log(sayHello());

// ------------------------------------------------------------------

// let adder = (num1,num2) => num1 + num2 ;

// console.log(adder(5,16));
