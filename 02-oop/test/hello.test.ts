import { Person } from "../src/Person";

describe("hello testing", () => {
  it("method should work", () => {
    const hendy = new Person(23, 22, "Hendy");
    expect(hendy.sayHello("Dimas")).toBe("hello Dimas nama saya Hendy");
  });
});
