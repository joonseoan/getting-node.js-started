/*

var fs = require('fs');
console.log(1);
var data = fs.readFileSync('textData.txt', { encoding: 'utf8'});
console.log(data);

*/

//synch
var fs = require('fs');
console.log(1);
var data = fs.readFileSync('textData.txt', { encoding: 'utf8'});
console.log(data);

// Asynch fs.readFile() it is running in background.
// Then it runs console.log(4).
// Then it runs readFile()
console.log(2);
fs.readFile('textData.txt', {encoding: 'utf8'}, (error, data) => { console.log(3); console.log(data);
});

console.log(4);
    


