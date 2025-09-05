const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });

    const result = [];
    result.push(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    Object.keys(fields).forEach((field) => {
      result.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });

    resolve(result.join('\n'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
