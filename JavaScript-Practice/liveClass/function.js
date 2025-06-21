


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// function FizzBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// FizzBuzz(250);

// ==========================================================


// Interest = (Principal × Rate × Time) / 100

// function calculateInterest(principal, rate, time) {
//   const interest = (principal * rate * time) / 100;
//   console.log(`Principal: ${principal}`);
//   console.log(`Rate: ${rate}%`);
//   console.log(`Time: ${time} years`);
//   console.log(`Interest: ${interest}`);
//   console.log(`Total Amount: ${principal + interest}`);
// }
// calculateInterest(10000, 5, 2);

// ===============================================================

// Strike Rate = (Total Runs / Total Balls Faced) × 100

// function strikeRate(runs, balls) {
//   if (balls === 0) {
//     console.log("Balls faced cannot be zero.");
//     return;
//   }

//   const rate = (runs / balls) * 100;
//   console.log(`Runs: ${runs}`);
//   console.log(`Balls: ${balls}`);
//   console.log(`Strike Rate: ${rate.toFixed(2)}`);
// }
// strikeRate(45, 30);

// ==================================================================

// BMI = weight (kg) / (height (m) * height (m))

// function calculateBMI(weightKg, heightMeters) {
//   const bmi = weightKg / (heightMeters * heightMeters);

//   console.log(`Weight: ${weightKg} kg`);
//   console.log(`Height: ${heightMeters} m`);
//   console.log(`BMI: ${bmi.toFixed(2)}`);

//   if (bmi < 18.5) {
//     console.log("Category: Underweight");
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     console.log("Category: Normal weight");
//   } else if (bmi >= 25 && bmi < 29.9) {
//     console.log("Category: Overweight");
//   } else {
//     console.log("Category: Obese");
//   }
// }
// calculateBMI(68, 1.75);


// =====================================================================

// function convertUsdToBdt(usd, rate) {
//   const bdt = usd * rate;
//   console.log(`${usd} USD = ${bdt.toFixed(2)} BDT`);
// }
// convertUsdToBdt(100, 117.5); // You can change the exchange rate

// =================================================================================

// 1 kilometer ≈ 0.621371 miles

// function convertKmToMiles(km) {
//   const miles = km * 0.621371;
//   console.log(`${km} km = ${miles.toFixed(2)} miles`);
// }
// convertKmToMiles(10);

// =======================================================================

