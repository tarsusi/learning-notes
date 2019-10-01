# Variables

- Variables can start with a **letter**, **underscore**, or the **\$** character. They can't start with a number.

- Variables come in two different types: value types and reference types. Boolean values and numbers are value-based types, whereas strings, objects, arrays, and functions are reference types (taken from [dofactory](https://www.dofactory.com/tutorial/javascript-builtin-types))

## var vs let vs const

var:

- function scoped
- undefined when accessing a variable before it's declared

let:

- block scoped
- ReferenceError when accessing a variable before it's declared

const:

- block scoped
- ReferenceError when accessing a variable before it's declared
  can't be reassigned

Notes:

- Variables declared with `let` or `const` cannot be re-declared in the same scope:

## Null and Undefined

- null is an assigned value. It means nothing.
- undefined means a variable has been declared but not defined yet.
- null is an object. undefined is of type undefined.
- null !== undefined but null == undefined.

```javascript
// null == undefined --> true
// null !== undefined --> true
```
