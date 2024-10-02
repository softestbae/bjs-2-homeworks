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
    if(this.marks && !this.excluded) {
        this.marks.push(...marks);
      }
}

Student.prototype.getAverage = function () {
  if(this.marks.length === 0) {
    return 0;
  }
  else {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
        count += 1;
    }
    return sum / count;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
