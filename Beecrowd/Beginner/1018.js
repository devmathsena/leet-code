/*
In this problem you have to read an integer value and calculate the smallest possible number of banknotes in 
which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and 
the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example.
Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

Input Sample	Output Sample
576             576
                5 nota(s) de R$ 100,00
                1 nota(s) de R$ 50,00
                1 nota(s) de R$ 20,00
                0 nota(s) de R$ 10,00
                1 nota(s) de R$ 5,00
                0 nota(s) de R$ 2,00
                1 nota(s) de R$ 1,00
*/

const input = '576\n';
const lines = input.split('\n');

const value = parseInt(lines[0]);

function numberBanknotes(value) {
    let hundred = 0;
    let fifth = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;
    let mod = 0;
    
    hundred = Math.floor(value / 100);
    mod     = value % 100;
    fifth   = Math.floor(mod / 50);
    mod     = mod % 50;
    twenty  = Math.floor(mod / 20);
    mod     = mod % 20;
    ten     = Math.floor(mod / 10);
    mod     = mod % 10;
    five     = Math.floor(mod / 5);
    mod     = mod % 5;
    two     = Math.floor(mod / 2);
    mod     = mod % 2;
    one     = Math.floor(mod / 1);
    mod     = mod % 1;

    console.log(`${value}
${hundred} nota(s) de R$ 100,00
${fifth} nota(s) de R$ 50,00
${twenty} nota(s) de R$ 20,00
${ten} nota(s) de R$ 10,00
${five} nota(s) de R$ 5,00
${two} nota(s) de R$ 2,00
${one} nota(s) de R$ 1,00`);
}

numberBanknotes(value);