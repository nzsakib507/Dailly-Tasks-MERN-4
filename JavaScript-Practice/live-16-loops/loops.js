// loops

// for(let i=1;i<=10;i++){
//     console.log(`5*${i}=${5*i}`);
// }


// let arra = ['sakib', 'sabrin', 'farjana', 'afifa'];
// let gmArra = [];

// let i;
// for (i = 0; i < arra.length; i++) {
//     // console.log(`${arra[i]}`);
//     // console.log(`GM ${arra[i]}`);
//     console.log(arra[i]);
//     gmArra.push(`GM ${arra[i]}`);
// }
// console.log(gmArra);


// =====================================================
// while loop

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// };

// let i=10;
// while(i>=0){
//     console.log(i);
//     i--;

//     if(i==20 || i== -10) break;
// }
// console.log(`outside`, i);
// console.log(`outside ${i}`);


// ============================================================
// nested loop

// for(let i=1; i<=5; i++){
//     for(let j=1;j<=5;j++){
//         console.log(`i: ${i} and j: ${j}`);
//     };
// };

// ====================================================================
// use of nested loop

// let array= [
//     ['sakib', 'raj', '015'],
//     ['farzana', 'ctg', '018'],
//     ['jerry', 'srg', '015'],
// ];

// for(let row=0;row<array.length;row++){
//     for(let col=0; col<array[row].length;col++){
//         // console.log(row, col);
//         console.log(array[row][col]);
//     };
// };

// console.log([ROW][COL]);
// console.log(array[0][0]);
// console.log(array[0][1]);
// console.log(array[0][2]);
// console.log(array[1][0]);
// console.log(array[1][1]);
// console.log(array[1][2]);
// console.log(array[2][0]);
// console.log(array[2][1]);
// console.log(array[2][2]);


// =====================================================================

// for loop= when i know how much iteration needed to be run
// while loop= when i dont know how many times i have to iterate

// while(age < 18){

// };

// =========================================================================

// let age = 15;
// let age = 19;
// if( age > 18 ){
//     console.log(`congralituations`);
// }
// else{
//     console.log(`error`);
// };

// ===============================================================================

// let arra = ['sakib', 'sabrin', 'farjana', 'afifa'];
// returns element of that index
// for(Element of arra){
//     console.log(Element);
// }

// returns index
// for(gm in arra){
//     // console.log(gm);
//     console.log(arra[gm]);
// }

// =========================================================================

// let array= [
//     ['sakib', 'raj', '015'],
//     ['farzana', 'ctg', '018'],
//     ['jerry', 'srg', '015'],
// ];

// for(innerArr of array){
//     // console.log(innerArr);
//     for(singleEle of innerArr){
//         console.log(singleEle);
//     }
// }


let array = ['sakib', 'sabrin', 'farjana', 'afifa'];

array.forEach(function(el){
    console.log(el);
});