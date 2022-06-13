function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function () {
  return this.average = this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return (acc + item);
    }
  });
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}

// ваш код для остальных методов

const student1 = new Student("Vasya", "male", 24);
const student2 = new Student("Fialka", "female", 19);

student1.setSubject("matematika");
student1.addMarks(4, 6, 8 ,2);

console.log(student1);
console.log(student2);
console.log(student1.getAverage());
console.log(student1.exclude("sleepOnLessons"));
console.log(student1.excluded);
console.log(student1);