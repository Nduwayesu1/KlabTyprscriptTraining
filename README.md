What is TypeScript?

TypeScript is a programming language that is built on top of JavaScript.

👉 TypeScript = JavaScript + types

It adds types to JavaScript to help you write safer and clearer code.

Why use TypeScript?

TypeScript helps you:

✅ Catch errors before running your code
✅ Understand your code better
✅ Get better autocomplete and hints in editors
✅ Write code that is easier to maintain

Example problem in JavaScript:

function add(a, b) {
  return a + b;
}

add(5, "3"); // "53" ❌ (unexpected)


Same code in TypeScript:

function add(a: number, b: number): number {
  return a + b;
}

// add(5, "3"); ❌ Error before running the code

Basic TypeScript types

Here are the most common ones you’ll use:

let age: number = 16;
let name: string = "Alex";
let isStudent: boolean = true;

Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

Functions in TypeScript

You can define parameter types and return types:

function greet(name: string): string {
  return `Hello, ${name}!`;
}

Type inference

TypeScript is smart — you don’t always need to write types:

let score = 100; // TypeScript knows this is a number

if statements

Same as JavaScript, but safer with types:

let age: number = 18;

if (age >= 18) {
  console.log("Adult");
}

Working with strings
let email: string = "test@example.com";

if (email.includes("@")) {
  console.log("Looks like an email");
}

Interfaces (simple example)

Interfaces describe the shape of an object:

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alex",
  age: 16
};

Do I need to know JavaScript first?
👉 Yes, a little.
TypeScript uses JavaScript rules, but adds safety on top.
Where is TypeScript used?
Web apps (React, Angular)
Backend apps (Node.js)
Mobile apps
Games and tools

Summary
TypeScript makes JavaScript safer

Types help prevent bugs

Code becomes easier to read and understand

Perfect for beginners and professionals# KlabTyprscriptTraining
