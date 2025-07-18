import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("race-car")).toThrow(
      "Invalid input: only alphabetic characters allowed."
    );
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow(
      "Invalid input: must be a string."
    );
  });
});
