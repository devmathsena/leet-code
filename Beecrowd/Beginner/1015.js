/*
Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) 
and calculate the distance between them, showing four decimal places, according to the formula:

Distance = √(x2-x1)²+(y2-y1)²

Input
The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one 
also contains two double values with one digit after the decimal point: x2 y2.

Output
Calculate and print the distance value using the provided formula, with 4 decimal places.

Input Sample	Output Sample
1.0 7.0         4.4721
5.0 9.0

-2.5 0.4        16.1484
12.1 7.3

2.5 -0.4        16.4575
-12.2 7.0
*/

const input = '1.0 7.0\n5.0 9.0';
const lines = input.split('\n');

const p1 = lines[0];
const p2 = lines[1];

const firstAxes = p1.split(' ');
const secondAxes = p2.split(' ');

const x1 = parseFloat(firstAxes[0]);
const y1 = parseFloat(firstAxes[1]);
const x2 = parseFloat(secondAxes[0]);
const y2 = parseFloat(secondAxes[1]);

function calcDistanceBetween(x1,y1,x2,y2) {
    const distance = Math.sqrt(((x2-x1)** 2) +((y2-y1) ** 2));
    return distance.toFixed(4);
}

const distanceBetween = calcDistanceBetween(x1,y1,x2,y2);

console.log(distanceBetween);