"use strict";
const age = 30; // if you define [ : ] and [ specific ] type that's call [ type annotation ]
// example 👇
const first_name = "John"; // in this case [ first_name:string ] string is type annotation
// Practice
const first__name = "Zeet";
const last__name = "Patel";
let age_ = 20;
let age_two = "50";
const full__name = `${first__name} ${last__name} is ${age_} years old`;
age_ = Number(age_two);
console.log(age_, typeof age_);
