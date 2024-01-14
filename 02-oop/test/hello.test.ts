import { Employee } from "../src/Employee";

describe("hello testing", () => {
  it("method should work", () => {
    const hendy = new Employee(23, 22, "Hendy",'MIS');
    expect(hendy.sayHello("Dimas")).toBe("hello Dimas nama saya Hendy");
    hendy.name = "Setiawan";
    expect(hendy.sayHello("Dimas")).toBe("hello Dimas nama saya Setiawan");
    expect(hendy.name).toBe("Setiawan");
  });
});
