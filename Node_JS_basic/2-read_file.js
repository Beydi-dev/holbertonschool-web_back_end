// Inclut le module fs
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
    const [, ...rows] = lines;

    if (rows.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    console.log(`Number of students: ${rows.length}`);

    const byField = {};

    for (const line of rows) {
      const cells = line.split(',').map((c) => c.trim());
      const firstname = cells[0];
      const field = cells[cells.length - 1];

      if (!byField[field]) {
        byField[field] = { count: 0, names: [] };
      }
      byField[field].count += 1;
      byField[field].names.push(firstname);
    }

    // Affichage par filière (ordre stable)
    for (const field of Object.keys(byField).sort()) {
      const { count, names } = byField[field];
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
