export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
		this.length = length;
		this.students = students;
	}
  // --- name ---
 get name() {
  return this._name;
 }

 set name(value) {
  if (typeof(value) !== 'string') {
    throw new TypeError('name must be a string');
  }
  this._name = value;
 }

 // --- length ---
 get length() {
  return this._length;
 }

 set length(value) {
  if (typeof(value) !== 'number') {
    throw new TypeError('lenght must be a number');
  }
  this._length = value;
 }

 // --- students ---
 get students() {
  return this._students;
 }

 set students(value) {
  if (!Array.isArray(value) || !value.every((el) => typeof el === 'string')) {
    throw new TypeError('students must be an arrat of strings');
  }
  this._students = value;
}
}