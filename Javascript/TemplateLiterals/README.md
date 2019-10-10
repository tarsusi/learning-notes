# Template Literals

There are 3 cases of using template literals

## String concatenation

- You can concatenate multiple strings using template literals

```javascript
const firstName = "Ömer";
const middleName = "Burak";
const lastName = "Karataş";

const fullName = `${firstName} ${middleName} ${lastName}`;

console.log(fullName);
```

## Multiple lines

- You can create strings with multiple lines

```javascript
const multipleLineStr = `Hello there,
    My name is Ömer, and you view
    my learning notes.
    Enjoy it!
`;
```

## Tag functions

- You can create magical, syntatic sugar, function using template literals.

```javascript
const name = "Omer";
const typeOfDay = "cheerful";

myGreeting`Hello Sir ${name}, have a ${typeOfDay} day.`;

function myGreeting(literals, ...expressions) {
  console.log(
    literals[0] + expressions[0] + literals[1] + expressions[1] + literals[2]
  );
}
```

**Note**: Tag functions arguments are:

- The first is an array in which the literal match appears in several strings using the expressions \${...} as breakpoints
- The rest of the arguments (arguments[1] and arguments[2]) are the result of the variables already interpolated ( bar y zeta )
