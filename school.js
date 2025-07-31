class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study(subject) {
    console.log(`${this.name} is studying ${subject}.`);
  }

  showGrade() {
    console.log(`${this.name} is in grade ${this.grade}.`);
  }
}


class Teacher extends Person {
  constructor(name, age, subject, yearsOfExperience) {
    super(name, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }

  showExperience() {
    console.log(`${this.name} has ${this.yearsOfExperience} years of teaching experience.`);
  }
}
