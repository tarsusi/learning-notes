# Shallow and Deep Copy

## Object Shallow Copy

`Object.assign` and `Object dectructring` make a shallow copy of object.

```javascript
const firstObject = {
  a: {
    aa: 123
  },
  b: 1
};

const shallowCloneObject = Object.assigb({}, firstObject);
// Or using object destructing will give same result
// const shallowCloneObject = { ...firstObject };

shallowCloneObject.b = 123;
shallowCloneObject.a.aa = 345;

console.log(shallowCloneObject); --> { a: { aa: 345 }, b: 123 }

console.log(firstObject); --> { a: { aa: 345 }, b: 1 }

```

## Object Deep Copy

One way to deep copy natively is by using `JSON.stringify` method.

```javascript
const firstObject = {
  a: {
    aa: 123
  },
  b: 1
};

const deepCloneObject = JSON.parse(JSON.stringify(firstObject));


shallowCloneObject.b = 123;
shallowCloneObject.a.aa = 345;

console.log(shallowCloneObject); --> { a: { aa: 345 }, b: 123 }

console.log(firstObject); --> { a: { aa: 123 }, b: 1 }

```

## Array Shallow Copy

`destructuring`, `slice` amd `Array.from` functions creates shallow copy of an array.

```javascript
const firstArray = [["Omer", 114]];

// All creates a shallow copy
let arrayClone = [...firstArray];
arrayClone = firstArray.slice();
arrayClone = Array.from(firstArray);

arrayClone[0][1] = 123;

console.log(arrayClone); --> [["Omer", 123]]
console.log(array); --> [["Omer", 123]]
```
