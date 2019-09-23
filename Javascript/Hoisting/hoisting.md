# Hoisting

- Whenever our compiler encounters a block of JavaScript, the first thing it does is scan the entire block for any variable or function declarations.
- The important thing to note is that only the declaration is hoisted

## Examples

### Variable hoisting

- With `variable hoisting`, the declarations are hoisted and initialized as `undefined`.

```javascript
console.log(bar); // undefined
var bar = 100;
```

### Function hoisting

- When our compiler scans this block of code, it hoists `the function` to the top.
- With `function hoisting`, the entire function is hoisted and it can be used.

```javascript
console.log(foo()); // Yay!

function foo() {
  return "Yay!";
}
```

```javascript
function foo() {
  return "Yay!";
}

console.log(foo()); // Yay!
```

## Function Expressions

- Function declarations hoisted as `variable hoisting` means that the function has exits as `undefined` and it **cannot be called**.

```javascript
console.log(foo()); // TypeError: foo is not a function

var foo = function() {
  return "Yay!";
};
```

## The Temporal Dead Zone

```javascript
console.log(answer); // ReferenceError
let answer = "Correct";

console.log(ROLE); // ReferenceError
const ROLE = "user";

var foo = new AwesomeSauce(); // ReferenceError

class AwesomeSauce {
  constructor() {
    console.log("I exist!");
  }
}
```

- Classes or variables defined using `let` and `const` are actually hoisted, but they remain **uninitialized**.
