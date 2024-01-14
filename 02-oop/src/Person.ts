class Person {
  _name: string;
  readonly id: number;
  _age: number;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this._age = age;
    this._name = name;
  }
}

export { Person };
