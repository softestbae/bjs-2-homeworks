function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let studentAndrew = new Student('Andrew', 'male', 27);
let studentRose = new Student('Rose', 'female', 21);
let studentBob = new Student('Bob', 'male', 19);
let studentEmily = new Student('Emily', 'female', 31);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks) {
        this.marks.push(...marks);
      }
}

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks.length === 0) {
    return 0;
  }
  let sum = this.marks.reduce((acc, item) => {
    return acc + item}, 0)
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
