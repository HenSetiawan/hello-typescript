abstract class Person {
  protected _name: string;
  protected readonly id: number;
  protected _age: number;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this._age = age;
    this._name = name;
  }

  abstract sayHello(name: string): string;
}

export { Person };
