/*
Read two floating points' values of double precision A and B, corresponding to two student's grades. 

After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. 
Each grade can be from zero to ten, always with one digit after the decimal point. 

Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. 
Don’t forget the space before and after the equal sign.

Input
The input file contains 2 floating points' values with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, 
with 5 digits after the decimal point and with a blank space before and after the equal signal.

Input Samples	Output Samples
5.0             MEDIA = 6.43182
7.1

0.0             MEDIA = 4.84091
7.1

10.0            MEDIA = 10.00000
10.0
*/

const input = '5.0\n7.1'
const lines = input.split('\n')

const a = parseFloat(lines[0])
const b = parseFloat(lines[1])

function media(a,b){
    const MEDIA = (((a * 3.5) + (b * 7.5)) / 11).toFixed(5)
    return `MEDIA = ${MEDIA}`
}

console.log(media(a,b));