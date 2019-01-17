// Non-arrow function
let sayHello = function() {
  console.log('Hello');
}

// Arrow function
sayHello = () => {
  console.log('Hello');
}

// Arrow function minimized, one line function does not need braces
sayHello = () => console.log('Hello');

// Arrow function to return a single thing with a function
sayHello = () => 'Hello';

// Can't return object literal like this, will not work
sayHello = () => {msg: 'Hello'};

// You have to return object literals like so, this returns an object
sayHello = () => ({msg: 'Hello'});

// Single param does not need parenthesis
sayHello = name => console.log(`Hello, ${name}.`);

// Multiple params need parenthesis
sayHello = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}.`);

sayHello('Levi', 'Blodgett');

let users = ['Nathan', 'John', 'William'];

// Longest
let nameLengths = users.map(function(name) {
  return name.length;
});

// Shorter
nameLengths = users.map((name) => {
  return name.length;
});

// Shortest
nameLengths = users.map(name => name.length);

console.log(nameLengths);

// Arrow functions use a lexical this, so you don't have to worry about scope with them