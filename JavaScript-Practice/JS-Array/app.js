// const cars = ["car1", "car2", "car3", "car4"];
// console.log(cars);
// console.log(cars[2]);
// console.log(typeof(cars));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruits.toString();
// console.log(myList);


// nested array and object 

// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }

// // document.getElementById("demo").innerHTML = x;
// console.log(x);



// Array methods

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruits.toString();
// console.log(myList);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // document.getElementById("demo").innerHTML = fruits.join(" * ");
// let x= fruits.join(" * ");
// console.log(x);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let x= fruits.pop();
// // console.log(x);
// fruits.pop();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);
// console.log("The first fruit is: " + fruits[0]);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter"); 
// console.log(myChildren);


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// const o = fruits.copyWithin(2,0,2);
// console.log(o);


// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);


// // object constractor
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// // Create two Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// // let x=Person;
// console.log(myFather);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi"); 
// console.log(fruits);


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);


