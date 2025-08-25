let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let names = users.map(user => user.name);
console.log(names);

let people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 18 },
  { name: "Spike", age: 22 }
];

let adults = people.filter(person => person.age >= 18);
console.log(adults);



let people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];

let oldest = people2.reduce((max, person) => {
  return person.age > max.age ? person : max;
});

console.log(oldest); 

