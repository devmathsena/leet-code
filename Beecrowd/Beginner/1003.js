/*
Read two integer values, in this case, the variables A and B. After this, calculate the sum between them 
and assign it to the variable SOMA. Write the value of this variable.

Input
The input file contains 2 integer numbers.

Output
Print the message "SOMA" with all the capital letters, with a blank space before and after the equal signal follow
ed by the corresponding value to the sum of A and B. Like all the problems, don't forget to print the end of line, 
otherwise you will receive "Presentation Error"

Input Samples	Output Samples
30              SOMA = 40
10

-30             SOMA = -20
10

0               SOMA = 0
0
*/

const input = '-30\n10'
const lines = input.split('\n');

const a = parseInt(lines[0])
const b = parseInt(lines[1])

function soma(a,b) {
    const SOMA = a + b
    return `SOMA = ${SOMA}`
}

console.log(soma(a,b));
