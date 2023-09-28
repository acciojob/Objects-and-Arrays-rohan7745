const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the array players
const team = players;

// Create a copy of the array players
const team1 = [...players];

// Create a copy of the object person
const cap1 = { ...person };

// Now you can modify team1 or cap1 without affecting the original arrays/objects
