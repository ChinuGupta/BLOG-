import { describe, it, expect } from "vitest";
import { passwordValidation } from "./passwordvalidation";

describe("Password Validation", () => {
  it("should return error if password is less than 8 characters", () => {
    expect(passwordValidation("Pass1")).toBe("Password must be at least 8 characters long.");
  });

  it("should return error if password does not contain an uppercase letter", () => {
    expect(passwordValidation("password1")).toBe("Password must contain at least one uppercase letter.");
  });

  it("should return error if password does not contain a lowercase letter", () => {
    expect(passwordValidation("PASSWORD1")).toBe("Password must contain at least one lowercase letter.");
  });

  it("should return error if password does not contain a number", () => {
    expect(passwordValidation("Password")).toBe("Password must contain at least one number.");
  });
});
