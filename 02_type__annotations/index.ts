const age: number = 30; // if you define [ : ] and [ specific ] type that's call [ type annotation ]

// example 👇
const first_name: string = "John"; // in this case [ first_name:string ] string is type annotation

// Practice --------------------------------------------------------------------------------------------

const first__name: string = "Zeet";
const last__name: string = "Patel";
let age_: number = 20;
let age_two: string = "50";

const full__name: string = `${first__name} ${last__name} is ${age_} years old`;

// Types Of Annotations   ---------------------------------------------


// Basic Types
let num: number = 10;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let nul: null = null;
let undef: undefined = undefined; 

let sym: symbol = Symbol("symbol");
let obj: object = { key: "value" };

// Custom Types: Interface
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 30,
};

// Custom Types: Type Alias
type Point = {
    x: number;
    y: number;
};

let point: Point = {
    x: 10,
    y: 20,
};

// Union Types
let mixed: string | number = "Hello";
mixed = 42;

// Intersection Types
type Printable = {
    print: () => void;
};

type Loggable = {
    log: () => void;
};

function logAndPrint(obj: Printable & Loggable) {
    obj.print();
    obj.log();
}

const objWithMethods: Printable & Loggable = {
    print: () => console.log("Printing..."),
    log: () => console.log("Logging..."),
};

logAndPrint(objWithMethods);
