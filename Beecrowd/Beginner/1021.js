/*
Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate 
the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 
100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. 

Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

Input
The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

Output
Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

Input Sample	Output Sample
576.73          NOTAS:
                5 nota(s) de R$ 100.00
                1 nota(s) de R$ 50.00
                1 nota(s) de R$ 20.00
                0 nota(s) de R$ 10.00
                1 nota(s) de R$ 5.00
                0 nota(s) de R$ 2.00
                MOEDAS:
                1 moeda(s) de R$ 1.00
                1 moeda(s) de R$ 0.50
                0 moeda(s) de R$ 0.25
                2 moeda(s) de R$ 0.10
                0 moeda(s) de R$ 0.05
                3 moeda(s) de R$ 0.01
*/

const input = '4.16\n';
const lines = input.split('\n');

const money = Math.round(parseFloat(lines[0]) * 100);

function numberBanknotesCoins(money) {
    let hundred = 0, fifth = 0, twenty = 0, ten = 0, five = 0, two = 0;
    let one = 0, fifth_cent = 0, twenty_five_cent = 0, ten_cent = 0, five_cent = 0, one_cent = 0;
    let mod = 0;

    hundred = Math.floor(money / 10000);
    mod = money % 10000;

    fifth = Math.floor(mod / 5000);
    mod = mod % 5000;

    twenty = Math.floor(mod / 2000);
    mod = mod % 2000;

    ten = Math.floor(mod / 1000);
    mod = mod % 1000;

    five = Math.floor(mod / 500);
    mod = mod % 500;

    two = Math.floor(mod / 200);
    mod = mod % 200;

}

numberBanknotesCoins(money);