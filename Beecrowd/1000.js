/*
Welcome to beecrowd!

Your first program in any programming language is usually "Hello World!". In this first problem all you have to do is print this message on the screen.

Input
This problem has no input.

Output
You must print the message Hello World! and then the endline as shown below.

Input Sample	Output Sample
                Hello World!
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

console.log("Hello World!")