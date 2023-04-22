
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log( second);

const firstWrite = writeFileSync('./content/result.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('Done with the start');
console.log('Starting the next one');
