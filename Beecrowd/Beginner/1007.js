/*
Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the 
product of C and D (A * B - C * D).

Input
The input file contains 4 integer values.

Output
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, 
with a blank space before and after the equal signal.

Input Samples	Output Samples
5               DIFERENCA = -26
6
7
8

0               DIFERENCA = -56
0
7
8

5               DIFERENCA = 86
6
-7
8
*/

const input = '5\n6\n7\n8'
const lines = input.split('\n')

const a = parseInt(lines[0])
const b = parseInt(lines[1])
const c = parseInt(lines[2])
const d = parseInt(lines[3])

function difference(a,b,c,d) {
    const difference = (a * b) - (d * c)
    return `DIFERENCA = ${difference}` 
}

console.log(difference(a,b,c,d));