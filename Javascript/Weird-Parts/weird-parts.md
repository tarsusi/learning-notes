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
    typeof [] --> "object"
    typeof {} --> "object"
    typeof NaN --> "number"
    typeof Infinity --> "number"
    typeof -Infinity --> "number"
  ```

- ```javascript
    NaN !== NaN -> true
    NaN < 1 --> false
    NaN > 1 --> false
    NaN == NaN --> false
    isNaN(true) --> false
    isNaN(false) --> false
    isNaN(undefined) --> true
  ```

  - ```javascript
    Number(true) --> 1
    Number(false) --> 0
    ```

The NaN value is the only values in the whole JS language that is not equal to itself.

- In JavaScript, the best way to check for **NaN** is by checking for self-equality. Because **NaN** is not equal to itself, **NaN != NaN** will always return true.

```javascript
 {} + [] --> 0
 [] + {} --> '[object object]'
 "0" == false --> true
 true + false --> 1
 [] == ![] --> true
 '13' + 52 + '46' --> '135246'
 37 / true --> 37
```
