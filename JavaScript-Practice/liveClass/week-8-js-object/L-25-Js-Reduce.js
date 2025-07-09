// let nums = [1,2,3,4];

// let result = 0;

// for (let em of nums) {
//     result += em;
// }

// console.log(result);


// now lets do to by reduce method 

// let nums = [2,3,4];

// let result = nums.reduce( (acc, el , index , arr) => {
// //  return acc;
//  return acc + el;
// }, 0);

// console.log(result);




// L-25-Js-Reduce.js

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

// REDUCE
// 1. Get the total mass of all characters
// let totalMass= characters.reduce((acc,el) => {
//     // let mass = Number(el.mass);
//     // return acc+ mass;

//     // or 

//     return acc+ Number(el.mass);
// },0);
// console.log(totalMass);


// 2. Get the total height of all characters
// let totalHight= characters.reduce((acc,el) => {
//     // let height = Number(el.height);
//     // return acc+ height;

//     // or 

//     return acc+ Number(el.height);
// },0);
// console.log(totalHight);


// 3. Get the total number of characters in all the character names
// let totalChar = characters.reduce((acc, el) => {
//     return acc + el.name.length;
// },0);
// console.log(totalChar);


// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
// let eyeColor = characters.reduce((acc, el) => {
//     if (acc[el.eye_color]) {
//         acc[el.eye_color]++;
//     } else {
//         acc[el.eye_color] = 1;
//     }
//     return acc;
// }, {});
// console.log(eyeColor);




// ==========================================================

// let person = 'Helllo World';
// let count = {};

// for (let i=0; i<person.length; i++) {
//     // console.log(person[i]);
//     if(count[person[i]]) {
//         count[person[i]]++;
//     } else {
//         count[person[i]] = 1;
//     }
// }
// console.log(count); 




// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================



