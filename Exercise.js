let person = [
    { id: 1, name: "Alice", age: 28 }, 
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 30 },
];

function updatePerson(id, newData) {
    for (let i = 0; i < person.length; i++) {
        if (person[i].id === id) {
            person[i] = { ...person[i], ...newData };
            break;
        }
    }
}

updatePerson(2, { name: "Robert", age: 26 });

console.log(person);


function isValidPassword(password) {
  const uppercase = password.match(/[A-Z]/g) || [];
  const hasThreeUppercase = uppercase.length >= 3;
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[_!?\*]/.test(password);

  return hasThreeUppercase && hasDigit && hasSymbol;
}


console.log(isValidPassword("AB1!cD"));
console.log(isValidPassword("abc123"));


function areValuesUnique(array) {
  return new Set(array).size === array.length;
}


console.log(areValuesUnique([1, 2, 3]));
console.log(areValuesUnique([1, 2, 2, 3]));




