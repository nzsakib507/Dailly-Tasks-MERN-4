// Js problem solving 

// Problem 1:
// Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
// For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
// (45 / 30) * 100 = 150
// The function should round the strike rate to two decimal places.
// Example Input/Output:
// - calculateStrikeRate(45, 30) should return 150.00
// - calculateStrikeRate(100, 60) should return 166.67
// - calculateStrikeRate(25, 40) should return 62.50


// Solution :

// let calculateStrikeRate = (runs , balls) => {
//     let result = (runs/balls)*100;
//     return(`yopur run is ${runs} and you played ${balls} and your final stick rate is ${result.toFixed(2)}`);
//     // console.log(`yopur run is ${runs} and you played ${balls} and your final stick rate is ${result}`);
//     // return result;
// };

// let R45 = calculateStrikeRate(45,30);
// console.log(R45);
// let R45 = calculateStrikeRate(100,60);
// console.log(R45);
// let R45 = calculateStrikeRate(25,40);
// console.log(R45);




// =====================================================================================
// =====================================================================================
// =====================================================================================

// Problem 2:
// Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
// For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
// If there are no such pairs, the function should return 0.
// Examples:
// - `CountPairs("a1b2c3d4e5f6")` should return 3
// - `CountPairs("x1y2z3")` should return 1
// - `CountPairs("a2b2c2d2")` should return 4


// Solution :

// let CountPairs = (s) => {
//     let count = 0;
//     for (let index = 0; index < s.length - 1; index += 2) {
//         if (parseInt(s[index + 1]) % 2 === 0) {
//             count++;
//         }
//     }
//     return count; 
// };

// console.log(CountPairs('a1b2c3d4e5f6'));
// console.log(CountPairs('x1y2z3'));
// console.log(CountPairs('a2b2c2d2'));




// =====================================================================================
// =====================================================================================
// =====================================================================================



// Problem 3:
// Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
// Example Input/Output:
// - reverseString('hello') should return 'olleh'
// - reverseString('racecar') should return 'racecar'
// - reverseString('12345') should return '54321'


// Solution: 

// let reverseString = (string) => {
//     let reverseString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverseString += string[i];
//     }
//     return reverseString;
// };
// console.log(reverseString('hello'));
// console.log(reverseString('racecar'));
// console.log(reverseString('12345'));




// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 4:
// Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
// Example Input/Output:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("rotator") should return true
// isPalindrome("peep") should return true


// Solution:

// let isPalindrome = (string) => {
//     let reverseString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverseString += string[i];
//     }
//     if (string === reverseString){
//         return true;
//     } else {
//         return false;
//     }
// };

// or 

// let isPalindrome = function (s) {
//     const reversed = s.split('').reverse().join('');
//     return s === reversed;
//     // console.log(reversed);
// };

// console.log(isPalindrome('peep'));
// console.log(isPalindrome('rotator'));
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('racecar'));





// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 5:
// Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.
// For example, if the two input arrays are:
// [1, 3, 5, 7, 9]
// [2, 4, 6, 8, 10]
// The function should return the following array:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Example Input/Output:
// - mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]




// Solution:

// let mergeArrays = (array1, array2) => {
//     const margearray = array1.concat(array2);
//     return margearray.sort((a,b)=> a-b);
// };
// console.log(mergeArrays([1, 3, 5, 7, 9],[2, 4, 6, 8, 10]));
// console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));




// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 6:
// Write a function called `findShortestWord` that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.
// For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "The".
// Example Input/Output:
// - findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"
// - findShortestWord("Hello world") should return "world"
// - findShortestWord("Today is Monday") should return "is"




// Solution:

// let findShortestWord = (str) => {
//     // const words = str.split('');
//     const words = str.split(' ');
//     // console.log(words);
//     let shortest = words[0];

//     for(let i=1; i<words.length; i++){
//         if(words[i].length < shortest.length){
//             shortest = words[i];
//         }
//     }
//     return shortest;
// };

// console.log(findShortestWord('The quick a brown fox jumps over the lazy dog'));
// console.log(findShortestWord('Today is Monday'));
// console.log(findShortestWord('Hello world'));



// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 7:
// Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.
// Task
//  Write a `removeDuplicates` function that takes in an array of names and returns a new array with any duplicates removed.
// Sample Input:
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]
// Sample Output :
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]


// Solution:

// function removeDuplicates(names) {
//     return [...new Set(names)];
// }

// console.log(removeDuplicates(['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz']));




// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 8:
// You are giving a book stall at Dhaka International book fair and need to create a list of books to be featured at the event.
// Task:
// Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding copies available for the book.
// Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding to that book. The function should add copies to that particular book.
// Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling of that book. The function should deduct copies of that particular book.
// Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.
// .
// Sample Input:
// createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
// Add Copies(‘Bohubrihi’ , 5)
// Updates number of copies available of Bohubrihi to 15)
// ‘Sell Book’(‘Bohubrihi’ , 3)
//  Updates number of copies available of Bohubrihi to 12)
// ‘GetDetails’()
//   Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)
// Hint :Make 3 arrays of the same length.




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 9:
// Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.
// Sample Input:
// parseString(“21” , “24’ , “40”)
// parseString(“Hello” , “Alpha”)
// parseString(“Summer” , “2022”)
// Sample Output:
// 85
// Hello Alpha
// Summer 2022




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 10:
// Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.
// Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]
// Sample Output: [2, 10, 8, 7]




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 11:
// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 12:
// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 13:
// Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
// For example:
// Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 14:
// Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       *
//     ***
//    ****
//   *****
//  ******




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 15:
// Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       1
//     232
//    34543
//   4567654
//  567898765


// Solution:


// function printPalindromicTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';

//         // Padding spaces to center the triangle
//         for (let s = 0; s < rows - i; s++) {
//             line += ' ';
//         }

//         // Increasing sequence
//         for (let j = 0; j < i; j++) {
//             line += (i + j);
//         }

//         // Decreasing sequence
//         for (let j = i - 2; j >= 0; j--) {
//             line += (i + j);
//         }

//         console.log(line);
//     }
// }


// printPalindromicTriangle(5);





// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 16:
// A Fibonacci number is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the Fibonacci sequence is defined as:
// F(n) = F(n-1) + F(n-2) for n > 1
// So, the Fibonacci sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. Each subsequent number in the sequence is the sum of the two preceding numbers. The Fibonacci sequence has numerous mathematical properties and applications in various fields, including mathematics, computer science, and nature.
// Task 1:
// Write a function called "fibonacciSequence" that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.
// Sample Input: 8
// Sample Output: [0, 1, 1, 2, 3, 5, 8, 13]
// Task 2: Write a function called "isFibonacciNumber" that takes a number as input and returns true if the number is a Fibonacci number, and false otherwise.
// For example:
// Input: 8
// Output: true
// Input: 10
// Output: false




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 17:
// Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
// For example:
// Input: [5, 2, 8, 1, 9]
// Output: 5
// Input: [4, 2, 7, 1, 9, 10]
// Output: 5.5





// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================


// Problem 18:
// Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
// For Example:
// Input: “Hello”
// Output: {H:1, e:1, l: 2, o:1}




// Solution:







// =====================================================================================
// =====================================================================================
// =====================================================================================

