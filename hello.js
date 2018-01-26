/*

console.log ('hello world');
console.log (1+10);

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const o = require('os');
console.log(o.platform());