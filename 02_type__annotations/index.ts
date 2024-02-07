const age: number = 30; // if you define [ : ] and [ specific ] type that's call [ type annotation ]

// example 👇
const first_name: string = "John"; // in this case [ first_name:string ] string is type annotation

// Practice --------------------------------------------------------------------------------------------

const first__name: string = "Zeet";
const last__name: string = "Patel";
let age_: number = 20;
let age_two: string = "50";

const full__name: string = `${first__name} ${last__name} is ${age_} years old`;

age_ = Number(age_two);

console.log(age_, typeof age_);
