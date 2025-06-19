// map method 

// const data = [1, 5, 8, 16, 23, 42, 108, 256, 512];

// const result = data.map(function(currentValue, index, array) {
//     console.log(currentValue);
//     console.log(index);
//     console.log(array);
//     console.log("----------");
//     // return currentValue; 
//     // return "sakib";
//     return currentValue + 2;
// });

// console.log(result);
// console.log('dpi');

// ==========================================================================


// filter()

// const data = [1, 5, 8, 16, 23, 42, 108, 256, 512];

// const results = data.filter(function(currentValue,index,array){

//     // for return spaficic needs

//     // if (currentValue < 10){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

//     // or 

//     // if (currentValue < 10) return true;
//     // return false;

//     // or
    
//     return currentValue < 10;

//     // works Same
// });

// console.log(results);

// // or 
// const result2 = data.filter((currentValue)=> currentValue < 10);
// console.log(result2);

// ================================================================================



// array of object

const people = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com", profession: "Software Engineer" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com", profession: "Graphic Designer" },
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com", profession: "Data Analyst" },
  { id: 4, name: "David", age: 22, email: "david@example.com", profession: "Student" },
  { id: 5, name: "Eve", age: 26, email: "eve@example.com", profession: "UI/UX Designer" },
  { id: 6, name: "Frank", age: 33, email: "frank@example.com", profession: "Mechanical Engineer" },
  { id: 7, name: "Grace", age: 27, email: "grace@example.com", profession: "Teacher" },
  { id: 8, name: "Hannah", age: 24, email: "hannah@example.com", profession: "Marketing Specialist" },
  { id: 9, name: "Ian", age: 29, email: "ian@example.com", profession: "Photographer" },
  { id: 10, name: "Judy", age: 31, email: "judy@example.com", profession: "HR Manager" },
  { id: 11, name: "Kevin", age: 35, email: "kevin@example.com", profession: "Business Analyst" },
  { id: 12, name: "Laura", age: 23, email: "laura@example.com", profession: "Web Developer" },
  { id: 13, name: "Mike", age: 32, email: "mike@example.com", profession: "Accountant" },
  { id: 14, name: "Nina", age: 28, email: "nina@example.com", profession: "Nurse" },
  { id: 15, name: "Oscar", age: 34, email: "oscar@example.com", profession: "Civil Engineer" },
  { id: 16, name: "Pam", age: 26, email: "pam@example.com", profession: "Content Writer" },
  { id: 17, name: "Quinn", age: 29, email: "quinn@example.com", profession: "Lawyer" },
  { id: 18, name: "Rachel", age: 27, email: "rachel@example.com", profession: "Architect" },
  { id: 19, name: "Steve", age: 30, email: "steve@example.com", profession: "Chef" },
  { id: 20, name: "Tina", age: 25, email: "tina@example.com", profession: "Doctor" }
];

const output = people.filter(function(currentValue){


    if(currentValue.profession.toLocaleLowerCase === "Student") return true;
    return false;

});

console.log(output);