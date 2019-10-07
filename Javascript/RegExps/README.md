# Regular Expressions

Regular expression is an **object**, which can be defiend in two ways:

```javascript
// RegExp object constructor
const regExp_1 = new RegExp("hello");
// Regular expression literal
const regExp_2 = /hello/;
```

- **^** is start operator
- **\$** is end operator
- **.** is any one character
- **\*** is for characters repeated zero or more times
- **^** negates if it is at the beginning of a pattern
- **|** is used for or operator

## Meta characters

- **\d** matches any digit, equivalent to [0-9]
- **\D** matches any character that’s not a digit, equivalent to [^0-9]
- **\w** matches any alphanumeric character (plus underscore), equivalent to [A-Za-z_0-9]
- **\W** matches any non-alphanumeric character, anything except [^a-za-z_0-9]
- **\s** matches any whitespace character: spaces, tabs, newlines and Unicode spaces
- **\S** matches any character that’s not a whitespace
- **\0** matches null
- **\n** matches a newline character
- **\t** matches a tab character
- **\uXXXX** matches a unicode character with code XXXX (requires the u flag)
- **.** matches any character that is not a newline char (e.g. \n) (unless you use the s flag, explained later on)
- **[^]** matches any character, including newline characters. It’s useful on multiline strings

## Quantifiers

- **?** make expression optional
- **+** matches one or more items
- **\*** matches zero or more items
- **{n}** matches exactly n items
- **{n,m}** matches between **n** and **m** items
- **(.\*.)** groups items mathes with expression between parentheses

## Capturing Groups

Use one of the coolest functions

- String.match(RegExp)
- RegExp.exec(String)

## Named Groups

- By putting `?<name>` immediately after the opening parentheses.

```javascript
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";

let groups = str.match(dateRegexp).groups;

alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30
```

## Noncapturing Groups

- **?:** is used for ignore some groups in the resulting array.

## Flags

- **g**: matches the pattern multiple times
- **i**: makes the regex case insensitive
- **m**: enables multiline mode. In this mode, ^ and \$ match the start and end of the whole string. Without this, with multiline - strings they match the beginning and end of each line.
- **u**: enables support for unicode (introduced in ES6/ES2015)
- **s**: (new in ES2018) short for single line, it causes the . to match new line characters as well

```javascript
/hello/gi.test("HEllo"); //✅

new RegExp("hey", "ig").test("HEy"); //✅
```

## Escaping

These characters are special:

- **\\**
- **/**
- **[ ]**
- **()**
- **{ }**
- **?**
- **+**
- **\***
- **|**
- **.**
- **^**
- **\$**

## String boundaries
**\b** and **\B** let you inspect whether a string is at the beginning or at the end of a word:

- **\b** matches a set of characters at the beginning or end of a word
- **\B** matches a set of characters not at the beginning or end of a word

## Backreferences in Pattern

In the regular expressions, we can memorize grouped content.

- By numbering `\N`

```javascript
let str = `He said: "She's the one!".`;

let regexp = /(['"])(.*?)\1/g;

alert(str.match(regexp)); // "She's the one!"
```

- By naming `\k<name>`

```javascript
let str = `He said: "She's the one!".`;

let regexp = /(?<quote>['"])(.*?)\k<quote>/g;

alert(str.match(regexp)); // "She's the one!"
```

## Lookahead and Lookbehind

| **Pattern** | **type**            | **matches**            |
| ----------- | ------------------- | ---------------------- |
| X(?=Y)      | Positive lookahead  | X if followed by Y     |
| X(?!Y)      | Negative lookahead  | X if not followed by Y |
| (?<=Y)X     | Positive lookbehind | X if after Y           |
| (?<!Y)X     | Negative lookbehind | X if not after Y       |

- A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

### Positive lookahead

```javascript
let str = "1 turkey costs 30€";

alert(str.match(/\d+(?=€)/)); // 30, the number 1 is ignored, as it's not followed by €
```

### Negative lookahead

```javascript
let str = "1 turkey costs 30€";

alert(str.match(/\d+(?=\s)(?=.*30)/)); // 1
```

### Positive lookbehind

```javascript
let str = "1 turkey costs $30";

// the dollar sign is escaped \$
alert(str.match(/(?<=\$)\d+/)); // 30 (skipped the sole number)
```

### Negative lookbehind

```javascript
let str = "2 turkeys cost $60";

alert(str.match(/(?<!\$)\d+/)); // 2 (skipped the price)
```
