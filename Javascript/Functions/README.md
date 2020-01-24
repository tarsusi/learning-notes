# Functions

- all functions in Javascript are objects!
- function expressions are not hoisted
- function declarations are hoisted
- **this** is neither a reference to the function itself, nor is it a reference to the function's lexical scope.
- **this** is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

> An arrow function does not have its own **this**. The **this** value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules

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

- Bind returns a new function, allowing you to pass in a this array and any number of arguments

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

- Bind function takes arguments after the first argument, i.e. `this`. The rest arguments can be used for partially applied functions. These arguments set initial values of the function arguments.

```javascript
function multiply(a, b){
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
```

- **Call** and **Apply** are pretty interchangeable.
- **Bind** returns a new function **Call** and **Apply** execute the current function immediately.

- Calling the function **Function.prototype.apply()** will have the same effect as the spread syntax:

```javascript
// Using Function.prototype.apply() instead of the spread operator
[1, 3, 5].min(); // undefined
Math.min([1, 3, 5]); // NaN
Math.min.apply(null, [1, 3, 5]); // 1
Math.max.apply(null, [1, 3, 5]); // 5
```

```javascript
// You can use apply to concatenate
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6];
```

> Think of **a** in apply for array of args and **c** in call for columns of args.

## Function Private and Public Privacy

- Public property and public method example:

```javascript
function Book() {
  this.author = "Omer Burak KARATAS";
  this.getAuthor = function() {
    return this.author;
  };
}
var book = new Book();
alert(book.author); // => Omer Burak KARATAS   (public property)
alert(book.getAuthor()); // => Omer Burak KARATAS   (public method)
```

- Private property example:

```javascript
function Book() {
  var author = "James Joyce"; // private
  this.getAuthor = function() {
    // privileged
    return author;
  };
}
var book = new Book();
alert(book.author); // => undefined (i.e. private)
alert(book.getAuthor()); // => "James Joyce"
```

## Immediately Invoked Function Expressions

- IIFE can be declared in two ways:

```javascript
(function() {
  /* IIFE content*/
})();

// OR

(function() {
  /* IIFE content*/
}());
```
