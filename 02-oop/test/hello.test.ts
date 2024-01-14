import { Employee } from "../src/Employee";

describe("hello testing", () => {
  it("method should work", () => {
    const hendy = new Employee(23, 22, "Hendy",'MIS');
    expect(hendy.sayHello("Dimas")).toBe("hello Dimas my name is Hendy and im is employee here");
    hendy.name = "Setiawan";
    expect(hendy.sayHello("Dimas")).toBe(
      "hello Dimas my name is Setiawan and im is employee here"
    );
    expect(hendy.name).toBe("Setiawan");
  });
});
