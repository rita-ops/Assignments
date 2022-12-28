class Person {
    constructor(name, lastName, phoneNumber, email, age) {
      this._name = name;
      this._lastName = lastName;
      this._phoneNumber = phoneNumber;
      this._email = email;
      this._age = age;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(value) {
      this._lastName = value;
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    set phoneNumber(value) {
      this._phoneNumber = value;
    }
  
    get email() {
      return this._email;
    }
  
    set email(value) {
      this._email = value;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      this._age = value;
    }
  }


class Instructor extends Person {
    constructor(name, lastName, phoneNumber, email, age, major, yearsExperience, numStudents, salary) {
      super(name, lastName, phoneNumber, email, age);
      this._major = major;
      this._yearsExperience = yearsExperience;
      this._numStudents = numStudents;
      this._salary = salary;
    }
  
    get major() {
      return this._major;
    }
  
    set major(value) {
      this._major = value;
    }
  
    get yearsExperience() {
      return this._yearsExperience;
    }
  
    set yearsExperience(value) {
      this._yearsExperience = value;
    }
  
    get numStudents() {
      return this._numStudents;
    }
  
    set numStudents(value) {
      this._numStudents = value;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      this._salary = value;
    }
  }
  

  class Inst extends Person {

    calculateSalary(hoursWorked, hourlyRate) {
      const baseSalary = hoursWorked * hourlyRate;
      if (hoursWorked > 100) {
        return baseSalary * 1.1;
      } else {
        return baseSalary;
      }
    }
  }

  
  const instructor = new Instructor("Rita", "Rashed", "961-76-046244", "rita.rashed24@gmail.com", 31, "Computer Science", 3, 24, 1000);
  console.log(instructor.name); 
  console.log(instructor.lastName);
  console.log(instructor.phoneNumber);
  instructor.email = "rita.rashed24@gmail.com";
  console.log(instructor.email);
  console.log(instructor.age);
  console.log(instructor.major);
  console.log(instructor.yearsExperience);
  console.log(instructor.numStudents);
  console.log(instructor.salary);
  

const inst = new Inst();
const sal = inst.calculateSalary(160, 30);
console.log(sal);
