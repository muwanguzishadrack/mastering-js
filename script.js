/*
// VARIABLES
let js = "amazing";
console.log(4 + 8 + 12 - 10);

console.log("Shadrack");
console.log(23);

let firstName = "Shadrack";
console.log(firstName);

let person = "Shadrack";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

DATA TYPES
1. Numbers
2. Strings
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Shadrack");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// LET, CONST AND VAR

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

// lastName = "Shadrack";
// console.log(lastName);


// BASIC OPERATORS
const now = 2037;
const ageShadrack = now - 1991;
const ageSarah = now - 2018;
console.log(ageShadrack, ageSarah);

console.log(ageShadrack * 2, ageShadrack / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2

const firstName = "Shadrack";
const lastName = "Muwanguzi";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; //15
x += 10; // x =  x + 10 = 25
x *= 4; // = x * 4 = 100
x++; // x =  x + 1 = 110
x--;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(ageShadrack > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// OPERATOR PROCEDENCE

const now = 2037;
const ageShadrack = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const average = (ageShadrack + ageSarah) / 2;
console.log(ageShadrack, ageSarah, average);

// CHALLENGE #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// STRINGS AND TEMPLATE LITERALS
const firstName = "shadrack";
const job = "teacher";
const birthYear = 1995;
const year = 2037;

const shadrack =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(shadrack);

const shadrackNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shadrackNew);

console.log(`Just a reguler string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

// IF/ ELSE STATEMENTS

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// CHALLENGE #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
console.log("Mark's BMI is higher then John's!");

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
}


// TYPE COVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Shadrack"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; // 11
n = n - 1; // 11 - 1
console.log(n);


//TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null. NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if ((height = 0)) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality Operators: == vs. ===

const age = "18";

if (age === 18) console.log("You just became and adult (strict)");

if (age == 18) console.log("You just became and adult (loose)");

const favorite = Number(prompt("What's your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else if (favorite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23, 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");
*/

// Boolean Logic
