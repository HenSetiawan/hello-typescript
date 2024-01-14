import { Person } from "./Person";
class Employee extends Person {
  sayHello(_name: string): string {
    return `hello ${_name} nama saya ${this._name}`;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

export { Employee };
