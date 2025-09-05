const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((output) => {
        res.end(output);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.end('Not Found');
  }
};

const app = http.createServer(requestListener);
module.exports = app;

if (require.main === module) {
  app.listen(1245);
}
