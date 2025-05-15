/*
Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". 
Use the following formula:

MaiorAB = (a+b+abs(a-b))/2

Input
The input file contains 3 integer values.

Output
Print the greatest of these three values followed by a space and the message “eh o maior”.

Input Samples	Output Samples
7 14 106        106 eh o maior

217 14 6        217 eh o maior
*/

const input = '7 14 106';
const lines = input.split(' ');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);
const c = parseInt(lines[2]);

function biggerInt(a,b){
    const bigger = (a+b+Math.abs(a-b))/2;
    return bigger;
}

let bigger = biggerInt(a,b);
bigger = biggerInt(bigger,c);

console.log(`${bigger} eh o maior`);