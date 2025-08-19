export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // nouvelles variables, seulement dans ce bloc
    const task2 = false;
  }

  return [task, task2];
}
