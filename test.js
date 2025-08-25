let people = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 30 },
];

function updatePerson(id, newData) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].id === id) {
      // Merge existing person with new data (overwriting)
      people[i] = { ...people[i], ...newData };
      break;
    }
  }
}

// Example usage:
updatePerson(2, { name: "Robert", age: 26 });
console.log(people);

function isValidPassword(password) {
  // Count uppercase letters
  const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  const hasThreeUppercase = uppercaseCount >= 3;

  // Check for digit
  const hasDigit = /\d/.test(password);

  // Check for symbol (_, !, ?, *)
  const hasSymbol = /[_!?\*]/.test(password);

  return hasThreeUppercase && hasDigit && hasSymbol;
}

// Example usage:
console.log(isValidPassword("AbC1!xyz")); // true
console.log(isValidPassword("abc123"));   // false
console.log(isValidPassword("ABC123"));   // false (missing symbol)

function areValuesUnique(array) {
  return new Set(array).size === array.length;
}

// Example usage:
console.log(areValuesUnique([1, 2, 3, 4]));    // true
console.log(areValuesUnique([1, 2, 2, 3]));    // false