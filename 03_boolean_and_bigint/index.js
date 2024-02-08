"use strict";
// boolean
let isLoggingIn = true;
let isLoading = false;
let booleanIntoNumber = Number(isLoggingIn) + Number(isLoading);
console.log(booleanIntoNumber);
// bigInt
// let bigNumberGenerate = Number.MAX_SAFE_INTEGER; // To Generate Maximum Number
// console.log(bigNumberGenerate);
let bigNumberOne = 900719925474099112334n;
let bigNumberTwo = 900719925474099726251n;
let bigNumberSum = bigNumberOne + bigNumberTwo;
console.log(bigNumberSum);
// Practice ---------------------------------------
const isEven = (number) => {
    return number % 2 === 0 ? false : true;
};
console.log(isEven(3));
const isDevisableBy8and4 = (number) => {
    return number % 8 === 0
        ? "number is devisable by 8"
        : number % 4 === 0
            ? "number is not devisable by 4"
            : number % 8 === 0 && number % 4 === 0
                ? "number is devisable by 8 and 4"
                : "number is not devisable by 8 or 4";
};
console.log(isDevisableBy8and4(1));
