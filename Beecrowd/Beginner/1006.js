/*
Read three values (variables A, B and C), which are the three student's grades. 
Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5.
Consider that each grade can go from 0 to 10.0, always with one decimal place.

Input
The input file contains 3 values of floating points (double) with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, 
with a blank space before and after the equal signal.

Input Samples	Output Samples
5.0             MEDIA = 6.3
6.0
7.0

5.0             MEDIA = 9.0
10.0
10.0

10.0            MEDIA = 7.5
10.0
5.0
*/

const input = '5.0\n6.0\n7.0'
const lines = input.split('\n')

const a = parseFloat(lines[0])
const b = parseFloat(lines[1])
const c = parseFloat(lines[2])

function media(a,b,c) {
    const MEDIA = (((a * 2) + (b * 3) + (c * 5)) / 10).toFixed(1)
    return `MEDIA = ${MEDIA}`
}

console.log(media(a,b,c));