"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// Functions:

function logger() {
  console.log("My name is Shadrack");
}

// Calling/ running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// FUNCTIONS
//Function Declarations

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow Functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Shadrack"));
console.log(yearsUntilRetirement(1980, "Bob"));

//Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Shadrack"));
console.log(yearsUntilRetirement(1950, "Mike"));

// // Coding Exercise 5: CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// DATA 1
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

//  Introduction to Arrays

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Shadrack";
const shadrack = [firstName, "Mark", 2037 - 1995, "teacher", friends];
console.log(shadrack);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Basic Array Operations (Methods)
const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // At elements at the end of array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Add elements at the beginning of array
console.log(friends);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First elements
console.log(friends);

console.log(friends.indexOf("Steven")); // Returns index
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // Checks for value in array
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// Coding Exercise 6: CHALLENGE #2
// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);


// Introduction to Objects
const shadracKArray = [
  "Shadrack",
  "Mark",
  2037 - 1995,
  "teacher",
  ["Michael", "Peter", "Steve"],
];

console.log(shadracKArray);

const shadrack = {
  firstName: "Shadrack",
  lastName: "Mark",
  age: 2037 - 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
};

// Dot vs. Bracket Notation

const shadrack = {
  firstName: "Shadrack",
  lastName: "Mark",
  age: 2037 - 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
};

console.log(shadrack);

console.log(shadrack.lastName);
console.log(shadrack["lastName"]);

console.log(shadrack["lastName"]);

const nameKey = "Name";
console.log(shadrack["first" + nameKey]);
console.log(shadrack["last" + nameKey]);

const interestedIn = prompt(
  "What do you what to know about choose between firstName, lastName, age, job and friends"
);

if (shadrack[interestedIn]) {
  console.log(shadrack[interestedIn]);
} else {
  console.log(
    "Wrong request! choose between firstName, lastName, age, job and friends"
  );
}

shadrack.location = "Uganda";
shadrack["twitter"] = "@sirshadrack";
console.log(shadrack);

// Challenge
// "Shadrack has 3 friends, and his best friend is called Michael"

console.log(
  `${shadrack.firstName} has ${shadrack.friends.length} friends and his best friend is called ${shadrack.friends[0]}`
);

// Object Methonds
const shadrack = {
  firstName: "Shadrack",
  lastName: "Mark",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steve"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's lecense.`;
  },
};
console.log(shadrack.calcAge());

console.log(shadrack.age);
console.log(shadrack.age);
console.log(shadrack.age);

// Challenge
//Shadrack is a 46-year old teacher, and he has a drivers license

console.log(shadrack.getSummary());
//
// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
// Iteration: The for Loop

// console.log("Lifting weights reptition 1");
// console.log("Lifting weights reptition 2");
// console.log("Lifting weights reptition 3");
// console.log("Lifting weights reptition 4");
// console.log("Lifting weights reptition 5");
// console.log("Lifting weights reptition 6");
// console.log("Lifting weights reptition 7");
// console.log("Lifting weights reptition 8");
// console.log("Lifting weights reptition 9");
// console.log("Lifting weights reptition 10");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights reptition ${rep}`);
}

// Looping Arrays
const shadrack = [
  "Shadrack",
  "Mark",
  2037 - 1995,
  "teacher",
  ["Michael", "Peter", "Steve"],
  true,
];

const types = [];

// console.log(shadracKArray.length);

for (let i = 0; i < shadrack.length; i++) {
  // Reading from shadrack array
  console.log(shadrack[i], typeof shadrack[i]);

  // Filling types array
  // types[i] = typeof shadrack[i];
  types.push(typeof shadrack[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//Breaking and Continuing
console.log("--- ONLY STRING ---");
for (let i = 0; i < shadrack.length; i++) {
  if (typeof shadrack[i] !== "string") continue;

  console.log(shadrack[i], typeof shadrack[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < shadrack.length; i++) {
  if (typeof shadrack[i] === "number") break;

  console.log(shadrack[i], typeof shadrack[i]);
}

// Looping Backwards and Loops in Loops
const shadrack = [
  "Shadrack",
  "Mark",
  2037 - 1995,
  "teacher",
  ["Michael", "Peter", "Steve"],
];

// Looping Backwards

for (let i = shadrack.length - 1; i >= 0; i--) {
  console.log(i, shadrack[i]);
}

// Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/
// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights reptition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights reptition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end.....");
}
