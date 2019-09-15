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
    NaN !== NaN -> true
  ```

  The NaN value is the only values in the whole JS language that is not equal to itself.
