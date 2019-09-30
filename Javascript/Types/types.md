# Types

## Built-in types

- string
- number
- boolean
- object
- null
- undefined
- symbol (added in ES6)

Note: All of these types except object are called "primitives"

## Other Types

- array
- function
- bigint ???

Note: Rather than being built-in types, these should be thought of more lie subtypes.

## Predefined Objects

- Array
- Boolean
- Date
- Function
- Math
- Number
- RegExp
- String

### Array

- push() versus unshift()
- pop() versus shift()
- indexOf() versus lastIndexOf()
- to empty an array you can set length value to 0. `myArray.length = 0`
- to empty an array you can use slice method. `myArray.slice(0,myArray.length)`
- to clonse an array use slice function. `const newArray = myArray.slice()`

### Check variable type

- To check the variable type, use `variable.constructor === <Type>`

```javascript
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.constructor === Array); // true

var name = "Homer Simpson";

console.log(name.constructor === String); // true

var foo = {};

console.log(foo.constructor === Object); // true
```

```javascript
'  4444 5555 666  '.replace(/\s/g, '') and '  4444 5555 666  '.trim() are same
```

```javascript
[] instanceof Object --> true
{} instanceof Object --> true
null instanceof Object --> false
new Object() instanceof Object --> true
Object() instanceof Object --> true
```

- **hasOwnProperty** function checks for the keys only in object itself, not in **prototype** of it.

```javascript
const a = { name: 'sample' };
const b = Object.create(a);

console.log(b); --> {}
console.log(b.name); --> "sample"
console.log(b.hasOwnProperty('name')); --> false
console.log('name' in b); --> true
console.log(Object.keys(b)); --> []
```
