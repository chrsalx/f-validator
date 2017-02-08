# f-validator

Toolkit of validation functions easy to compose into bigger validators.

```js
const validators = require('f-validator');
```
## Installation
```
npm i -S f-validator
```

## Usage

### Simple Validation
```js
validators.isEqual(true, true) // => true;
```

```js
validators.isInstanceOf(Date, 5) // => false;
```

```js
validators.isOk(true) // => true;
```

### Validator Composition

f-validator provides the functions `and`, `or` and `not` to easily compose validators into bigger more precise ones.

```js
const {or, not, isNull, isUndefined} = require('f-validator');
const isNotNull = not(isNull);
const isNotUndefined = not(isUndefined);
const isNotNullOrUndefined = or(isNotNull, isNotUndefined);

const isNotNullOrUndefined(null) // => false
const isNotNullOrUndefined(undefined) // => false
const isNotNullOrUndefined(42) // => true
```

### Partial Validators

Validators are handy when combined with partial functions for evaluating the same condition continuously.

```js
const is5000 => (comparable) => isEqual(comparable, 5000);

is5000(200) // => false
is5000(5000) // => true
```

## Functions

Whole lotta them!

### or
Returns a function that passes an argument to all given functions. Will only return
false if all functions return false.
```
or(...functions) => function

const isStringOrNumber = or(isString, isNumber)
isStringOrNumber(123) // => true,
isStringOrNumber('123') // => true,
isStringOrNumber(true) // => false,
```

### not
Returns a function that reverts the result of a given function.
```js
not(fn) => function

const is5 = v => isEqual(5, v);
const isNot5 = not(is5);
isNot5(5) //=> false
```


pending for docs...

`and(...functions)`
`isEqual(first, second)`
`isInstanceOf(constructor, instance)`
`isMatch(expression, string)`
`isOk(truthy)`
`isTypeOf(type, object)`
`isUndefined(object)`
`isNull(object)`
`hasLengthOf(iterable, length)`
`isString(string)`
`isNumber(number)`
`isBoolean(boolean)`
`isObject(object)`
`isDate(date)`
