fs = require('fs');
const path = require('path');

data = fs.readdirSync('/home/alpha/Desktop');
console.log('Data:', data);

console.log("This comes after!!");