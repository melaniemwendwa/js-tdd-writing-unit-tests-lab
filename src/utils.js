export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Invalid input: must be a string.");
  }

  if (word.length === 0) {
    return false;
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input: only alphabetic characters allowed.");
  }

  const lowercaseWord = word.toLowerCase();
  const reversedWord = lowercaseWord.split("").reverse().join("");

  return lowercaseWord === reversedWord;
}
