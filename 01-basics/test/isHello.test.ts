import { sayHello } from "../src/hello";

describe("hello", () => {
  it("should say hello", () => {
    expect(sayHello("Hendy")).toBe("Hello Hendy");
    expect(sayHello("Budi")).toBe("Hello Budi");
    expect(sayHello("Joko")).toBe("Hello Joko");
  });
});
