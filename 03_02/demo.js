var fs = require('fs');


fs.readdir('/home/alpha/Desktop', (err,data) => {
  console.log(data);
})