// boolean

let isLoggingIn: boolean = true;
let isLoading: boolean = false;

let booleanIntoNumber: number = Number(isLoggingIn) + Number(isLoading);
console.log(booleanIntoNumber);

// bigInt

// let bigNumberGenerate = Number.MAX_SAFE_INTEGER; // To Generate Maximum Number
// console.log(bigNumberGenerate);

let bigNumberOne: bigint = 900719925474099112334n;
let bigNumberTwo: bigint = 900719925474099726251n;

let bigNumberSum: bigint = bigNumberOne + bigNumberTwo;

console.log(bigNumberSum);

// Practice ---------------------------------------

const isEven = (number: number): boolean => {
    return number % 2 === 0 ? false : true;
};

console.log(isEven(3));

const isDevisableBy8and4 = (number: number): string => {
    return number % 8 === 0
        ? "number is devisable by 8"
        : number % 4 === 0
        ? "number is not devisable by 4"
        : number % 8 === 0 && number % 4 === 0
        ? "number is devisable by 8 and 4"
        : "number is not devisable by 8 or 4";
};

console.log(isDevisableBy8and4(1));
