# Generators

```javascript
Number.prototype[Symbol.iterator] = function \*() {
for(let i = 0; i <= this; i++)
yield i;
}

[...5] --> [0,1,2,3,4]
```
