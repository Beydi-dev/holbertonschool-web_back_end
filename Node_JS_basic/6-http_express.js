const express = require('express');

const app = express();
const port = 1245;

const setupRoutes = () => {
  app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
  });
};

setupRoutes();

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
