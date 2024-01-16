import { Employee } from "../src/Employee";
import { Staff } from "../src/Staff";
import { Configuration } from "../src/Configuration";
import { ValidationError } from "../src/ValidationError";

describe("hello testing", () => {
  it("method should work", () => {
    try {
      const bejo: Employee = new Employee(23, 17, "Bejo", "MIS");
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.message).toBe("minimum age for employee is 18");
      }
    }

    const hendy = new Staff(22, 22, "Hendy", "MIS");

    expect(hendy.sayHello("Dimas")).toBe(
      "hello Dimas my name is Hendy and im is employee here"
    );
    hendy.name = "Setiawan";
    expect(hendy.sayHello("Dimas")).toBe(
      "hello Dimas my name is Setiawan and im is employee here"
    );
    expect(hendy.name).toBe("Setiawan");

    expect(Configuration.AUTHOR).toBe("Hendy Setiawan");
  });
});
