/*
Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it 
expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

Input Sample	Output Sample
556             0:9:16

1               0:0:1

140153          38:55:53
*/

const input = '140153\n';
const lines = input.split('\n');

const given_seconds = parseInt(lines[0]);

function secondsFormated(given_seconds) {
    const hours = Math.floor(given_seconds / 3600);
    const minutes = Math.floor((given_seconds - (hours * 3600)) / 60);
    const seconds = given_seconds - (hours * 3600) - (minutes * 60);
    const timeString = hours.toString().padStart(1, '0') + ':' +
        minutes.toString().padStart(1, '0') + ':' +
        seconds.toString().padStart(1, '0');

    return timeString;
}

console.log((secondsFormated(given_seconds)));