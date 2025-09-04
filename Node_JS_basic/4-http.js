const http = require('http');

const host = 'localhost';
const port = 1245;

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);
module.exports = app;

if (require.main === module) {
  app.listen(port, host);
}
