export default function getListStudentsIds(Students) {
  if (!Array.isArray(Students)) {
    return [];
  }
  return Students.map((students) => students.id);
}
