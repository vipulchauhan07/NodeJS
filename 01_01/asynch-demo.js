fs = require('fs');

function phoneNumber(err, data) {
  console.log('Data:', data);
}

fs.readdir('/home/alpha/Desktop', phoneNumber);

console.log("This comes after");