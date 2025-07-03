// array map filter reduce sort search every some

// maps 

let nums = [2, 4, 6, 8];

// let newNums = [(...nums)*2];

// let newArr = nums.map(function (element, index, array) {
// let newArr = nums.map((element, index) => {
//     // console.log(element);
//     // console.log(index);
//     // console.log(Array);
//     return element * 2;

//     // if (element < 5) {
//     //     return element;
//     // }
// });

// console.log(newArr);

// ==================================================================

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// this is a arrey .. inside object.. i have to do is

// MAP
// 1. Get an array of all names
// let allNames= characters.map(function(el) {
//     return el.name;
// });
// console.log(allNames);

// 2. Get an array of all heights
// let allHights= characters.map(function(el) {
//     return el.height;
// });
// console.log(allHights);

// 3. Get an array of objects with just name and height properties
// let allChar= characters.map((el)=> {
//     return {
//         name: el.name,
//         Hight: el.height,
//     };
// });
// console.log(allChar);

// 4. Get an array of all first names
// let firstName= characters.map((el) => {
//     return el.name.split(' ')[0]; 
// });
// console.log(firstName);

// ========================================================
// ===========================================================

// Filter ==============

// let Numbers= [1,2,3,4,6,8,9];

// let filterNums = Numbers.filter(function (el, index, arr) {
//     return el % 2 == 0;
// });

// console.log(filterNums);

// ====================================

// FILTER
// 1. Get characters with mass greater than 100
// let geraterThan100= characters.filter((el) => {
//     return el.mass > 100
// });
// console.log(geraterThan100);

// 2. Get characters with height less than 200
// let geraterThan200= characters.filter((el) => {
//     return el.height > 200
// });
// console.log(geraterThan200);

// 3. Get all male characters
// let allMale= characters.filter((el) => {
//     if (el.gender == 'male'){
//         return el;
//     }
// });
// console.log(allMale);

// 4. Get all female characters
// let allMale= characters.filter((el) => {
//         return el.gender == 'female';
    
// });
// console.log(allMale);



// =======================================================
// ======================================================

// Every/Some
// bultial return true false

// let arr = [1,2,3,4,5,6,7,8,9];
// let arr = [2,4,6,8];

// let isEven = arr.every((el,inddex, arr) => {
//     return el % 2 == 0;
// });
// console.log(isEven);

// let isEven = arr.some((el,inddex, arr) => {
//     return el % 2 == 0;
// });
// console.log(isEven);

// lets do some problems
// EVERY
// 1.Does every character have blue eyes?
// let isBlue = characters.every((el) => {
//     return el.eye_color == 'blue';
// }); 
// console.log(isBlue);

// 2.Does every character have mass more than 40?
// let moreMass = characters.every((el) => {
//     return el.mass > 40;
// });
// console.log(moreMass);

// 3.Is every character shorter than 200?
// let Shorter = characters.every((el) => {
//     return el.height < 200;
// });
// console.log(Shorter);

// 4.Is every character male?
// let Male = characters.every((el) => {
//     return el.gender == 'male';
// });
// console.log(Male);

// SOME
// 1.Is there at least one male character?
// let Male = characters.some((el) => {
//     return el.gender == 'male';
// });
// console.log(Male);

// 2.Is there at least one character with blue eyes?
// let isBlue = characters.some((el) => {
//     return el.eye_color == 'blue';
// }); 
// console.log(isBlue);

// 3.Is there at least one character taller than 200?
// let taller = characters.some((el) => {
//     return el.height > 200;
// });
// console.log(taller);

// 4.Is there at least one character that has mass less than 50?
// let lesseMass = characters.some((el) => {
//     return el.mass < 50;
// });
// console.log(lesseMass);


// ===============================================================
// =============================================================
// ===============================================================

// Sort

// let Num = [1,2,3,5,2,2,6,77,244,233,125,2335,2456,1563,222222];

// Num.sort();
// Num.sort((a,b) => a-b);
// Num.sort((a,b) => b-a);

// console.log(Num);

// =========================================================================
// =======================================================================









// REDUCE
// 1. Get the total mass of all characters
// 2. Get the total height of all characters
// 3. Get the total number of characters in all the character names


