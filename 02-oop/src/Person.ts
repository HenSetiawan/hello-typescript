class Person {
  _name: string;
  readonly id: number;
  _age: number;

  constructor(id: number, _age: number, _name: string) {
    this.id = id;
    this._age = _age;
    this._name = _name;
  }
}

export { Person };
