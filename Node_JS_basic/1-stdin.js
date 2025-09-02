console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  // On utiliser process.stdout plutôt que console log pour eviter \n
  process.stdout.write(`Your name is: ${data.toString()}`);
  console.log('This important software is now closing');
  process.exit();
});
