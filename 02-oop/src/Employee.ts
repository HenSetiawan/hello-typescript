import { Person } from "./Person";

interface hasDepartmen {
  department: string;
}

class Employee extends Person implements hasDepartmen {
  department: string;

  constructor(id: number, age: number, name: string, department: string) {
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
