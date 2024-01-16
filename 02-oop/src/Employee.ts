import { Person } from "./Person";
import { ValidationError } from "./ValidationError";

interface hasDepartmen {
  department: string;
}

class Employee extends Person implements hasDepartmen {
  department: string;

  constructor(id: number, age: number, name: string, department: string) {
    if (age < 18) {
      throw new ValidationError("minimum age for employee is 18");
    }
    super(id, age, name);
    this.department = department;
  }
  sayHello(_name: string): string {
    return `hello ${_name} my name is ${this._name} and im is employee here`;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

export { Employee };
