# Notes from YDKJS series

Look at the [github](https://github.com/getify/You-Dont-Know-JS) page.

## UP & GOING

- Javascript has typed values not typed variables.

- When you use a primitive value like "hello world" as an object by referencing a property or method, JS automatically "boxes" the value to its object wrapper(String) counterpart(hidden under the covers).

- Explicit coercion is `var b = Number("42");`and implicit coercion is `var b = "52" * 2;`

- `==` checks for value equality with coercion allowed, `===`, is often called `strict equality`, checks for value equality without allowing coercion.

- An identifier must start with a-z,A-Z, \$, or \_. It can then contain any of those characters pluc the numerals 0-9.

- If you try to access a variable's value in a scope where it's not available, you'll get a `ReferenceError` thrown.

- Transpiling --> transforming + compiling

- document, console.log and alert is not provided by Js engine itself, theya re provided by the browser.
