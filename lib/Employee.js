class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  returnName() {
    return this.name;
  }
  returnEmail() {
    return this.email;
  }
  returnId() {
    return this.id;
  }
  returnRole() {
    return "Employee";
  }
}

module.exports = Employee;
