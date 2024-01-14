class Person {
  readonly id: number;
  _age: number;
  _name: string;

  constructor(id: number, _age: number, _name: string) {
    this.id = id;
    this._age = _age;
    this._name = _name;
  }

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

export { Person };
