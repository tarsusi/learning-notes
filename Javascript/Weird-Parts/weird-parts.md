# Weird Parts

- ```javascript
  (typeof null === 'object') -> true;
  ```

- ```javascript
  (typeof [1, 3, 4] === 'object') -> true;
  ```

- ```javascript
    (typeof function() {} === 'function') -> true;
  ```

- ```javascript
    var a = [1,2,3];
    var b = [1,2,3];
    var c = "1,2,3";

    a == c -> true
    b == c -> true
    a == b -> false
  ```

- ```javascript
    var a = 41;
    var b = "42";
    var c = "43";

    a < c -> true
    b < c -> true
  ```

- ```javascript
    var a = 42;
    var b = "foo";

    a < b -> false
    a > b -> false
    a == b -> false
  ```

- ```javascript
  false == "0"-- > true;
  true == "1"-- > true;
  ```

- ```javascript
  typeof []-- > "object";
  typeof {}-- > "object";
  typeof null-- > "object";
  typeof NaN-- > "number";
  typeof Infinity-- > "number";
  typeof -Infinity-- > "number";
  ```

- ```javascript
    NaN !== NaN -> true
    NaN < 1 --> false
    NaN > 1 --> false
    NaN == NaN --> false
    isNaN(true) --> false
    isNaN(false) --> false
    isNaN(undefined) --> true
    !!(new Boolean(false)) --> true

    console.log(isNaN(Number('114px')));                         --> true
    console.log(isNaN('I am a String!'));               --> true

    console.log(Number.isNaN(Number('114px')));                  --> true
    console.log(Number.isNaN('I am another String!'));  --> false

    114..toFixed() --> "114"
    114.114.toFixed(3) --> "114.114"
    
    const map = ['a', 'b', 'c'].map.bind([11, 22, 33]);
    map(el => console.log(el));
    // 11
    // 22
    // 33

  ```

- When dealing with arithmetic operations, `null` becomes **0**
- When dealing with arithmetic operations, `undefined` makes the result of operation `NaN`

- ```javascript
  Number(true)-- > 1;
  Number(false)-- > 0;
  Number([])-- > 0;
  Number({})-- > NaN;
  Number(null)-- > 0;
  Number(undefined)-- > NaN;
  ```

The NaN value is the only values in the whole JS language that is not equal to itself.

- The specification says that **NaN** is neither greater than nor less than any other value.

- In JavaScript, the best way to check for **NaN** is by checking for self-equality. Because **NaN** is not equal to itself, **NaN != NaN** will always return true.

```javascript
  [] + [] --> ""
  {} + [] --> 0
  [] + {} --> '[object object]'
  "0" == false --> true
  true + false --> 1
  [] == ![] --> true
  '13' + 52 + '46' --> '135246'
  37 / true --> 37
  [1,2,3] + [4,5,6] --> 1,2,34,5,6
  parseInt(null, 24) --> 23
```

- 'BANANA' with Javascript

```javascript
("b" + "a" + +"a" + "a").toLowerCase()-- > "banana";
```

- `Object.is()` determines whether two values are **the same value**

```javascript
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false
Object.is({}, {}); // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

Object.is(null, null); // true
Object.is(NaN, NaN); // true

// Special Cases
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```
