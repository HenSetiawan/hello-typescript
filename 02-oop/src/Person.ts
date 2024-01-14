class Person {
  _name: string;
  readonly id: number;
  _age: number;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this._age = age;
    this._name = name;
  }

  sayHello(_name: string): string {
    return `hello ${_name} my name is ${this._name}`;
  }
}

export { Person };
