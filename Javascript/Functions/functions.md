# Functions

- function expressions are not hoisted
- function declarations are hoisted

```javascript
// Function Declaration

function myFunction() {
  console.log("From function declaration");
}

// Function Expression

const myFunction = function anotherFunctionName() {
  console.log("From function expression");
};

console.log(myFunction.name); // --> anotherFunctionName
```

## Difference between **call**, **apply** and **bind** functions

- Call invokes the function and allows you to pass in arguments one by one(with commas).

```javascript
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King
```

- Apply invokes the function and allows you to pass in arguments an array.

```javascript
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King
```

- Bind returns a new function, allowing you to pass in a this arra and any number of arguments

```javascript
var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
```

- **Call** and **Apply** are pretty interchangeable.
- **Bind** returns a new function **Call** and **Apply** execute the current function immediately.
