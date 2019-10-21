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

- `Strict Mode` was added in **ES5**. It disallows the automatic/implicit global variable creation.

- Engine will throw an `ReferenceError`, if it fails to find a RHS look-up or no global scoped variable during an LHS operation.

- Engine will throw an `TypeError`, if it finds a value for RHS look-up but try to do something with it that is impossible, i.e. trying execute-function a nonfunction value, reference property of a **null** or **undefined** value.

- Another reason block-scoping is useful relates to closure and garbage collection to reclaim memory.

- Compilation phase and execution phase

- Closure is when a function is able to remember and access its lexical scope event when that function is executing outside its lexical scope.

- IIFE creates scope by declaring a function and immediately executing it.

- `Lexical scope`(also called Static scope) is write-time, whereas `dynamic scope`(and **this!**) are runtime. `Lexical scope` cares where a function declared, but `dynamic scope` cares where a function was called from.
