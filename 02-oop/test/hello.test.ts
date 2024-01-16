import { Employee } from "../src/Employee";
import { Staff } from "../src/Staff";

describe("hello testing", () => {
  it("method should work", () => {
    let hendy: Employee = new Employee(23, 22, "Hendy", "MIS");
    hendy = new Staff(22, 22, "Hendy", "MIS");

    expect(hendy.sayHello("Dimas")).toBe(
      "hello Dimas my name is Hendy and im is employee here"
    );
    hendy.name = "Setiawan";
    expect(hendy.sayHello("Dimas")).toBe(
      "hello Dimas my name is Setiawan and im is employee here"
    );
    expect(hendy.name).toBe("Setiawan");
  });
});
