const http = require('http');
const fs = require('fs').promises;

// Fonction asynchrone pour lire et analyser le CSV
async function countStudents(path) {
  try {
    const rawData = await fs.readFile(path, 'utf8');
    const lines = rawData.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, i) => {
        student[header.trim()] = values[i].trim();
      });
      return student;
    });

    const totalText = `Number of students: ${students.length}`;
    const fields = {};

    for (const student of students) {
      const { field, firstname } = student;
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    let details = '';
    for (const [field, names] of Object.entries(fields)) {
      details += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return `${totalText}${details}`;
  } catch (err) {
    // Si le fichier n'existe pas ou est illisible
    throw new Error('Cannot load the database');
  }
}

// Création du serveur HTTP
const app = http.createServer(async (req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    try {
      const studentSummary = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentSummary}`);
    } catch (err) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Écoute sur le port 1245
if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
