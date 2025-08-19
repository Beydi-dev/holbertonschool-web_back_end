export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;   // pas de "let" ici → on réutilise celles de l’extérieur
    task2 = false;
  }

  return [task, task2];
}
