var fs = require('fs');
var rs = fs.createReadStream('./myrenamedfile.txt');
rs.on('open', () => {
    console.log('The file is open');
});