const fs = require('fs');

// Fonction pour compter les étudiant à partir d’un CSV
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // On lit le fichier de façon asynchrone
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        // Si le fichier n'existe pas ou un autre souci : on crie
        reject(new Error('Cannot load the database'));
        return;
      }

      // On découpe le fichier ligne par ligne et on enlève les lignes vides
      const lines = content.split('\n').filter((line) => line.trim() !== '');
      const studentRows = lines.slice(1); // On enlève l'entete

      const studentsByField = {}; // Petit panier pour classer les étudiant
      let totalStudents = 0;

      for (const row of studentRows) {
        const parts = row.split(',');
        if (parts.length >= 4) {
          const firstName = parts[0].trim();
          const field = parts[3].trim();

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstName);
          totalStudents += 1;
        }
      }

      // On affiche le nombre total d’étudiant·es
      console.log(`Number of students: ${totalStudents}`);

      // Et le détail pour chaque filière
      for (const [field, names] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(); // Tout s’est bien passé
    });
  });
}

module.exports = countStudents;
