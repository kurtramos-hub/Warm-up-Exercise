let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]

// 2. Using .filter(), filter people with age 18 and above
let people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 18 },
  { name: "Spike", age: 22 }
];

let adults = people.filter(person => person.age >= 18);
console.log(adults); 
// [{ name: "Jerry", age: 18 }, { name: "Spike", age: 22 }]

// 3. Use reduce: Find the oldest person in the list
let people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];

let oldestPerson = people2.reduce((oldest, person) => {
  return (person.age > oldest.age) ? person : oldest;
});

console.log(oldestPerson); // { name: "Bob", age: 32 }