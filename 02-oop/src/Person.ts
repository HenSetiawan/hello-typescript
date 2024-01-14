class Person {
  readonly id: number;
  age: number;
  name: string;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.age = age;
    this.name = name;
  }

  sayHello(name: string): string {
    return `hello ${name} nama saya ${this.name}`;
  }
}

export { Person };
