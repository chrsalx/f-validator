# f-validators

Toolkit of validation functions easy to compose into bigger validators.

## Installation
```
npm i -S f-validator
```

## Usage

```js
const validators = require('f-validators');
```

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

f-validators provides the functions `and`, `or` and `not` to easily compose validators into bigger and more precise ones.

```js
const {or, not, isNull, isUndefined} = require('f-validators');
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

## Object Validation

Stack your validations to easily build object validation.

```js
const validateFieldA = ({ a }) => isNumber(a);
const validateFieldB = ({ b }) => isString(b);

const myObectValidator = and(validateFieldA, validateFieldB);

myObectValidator({a: 5, b: '5'}) // =>  true;
myObectValidator({a: 5, b: true}) // =>  false;
```

## Functions

Whole lotta them!

### or
Returns a function that passes an argument to all given functions. Will only return
false if all functions return false.
```js
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

### and
Returns a function that reverts the result of a given function.
```js
and(...fn) => functions

const hasLengthOf5 = v => hasLengthOf(5, v);
const isStringAndHasLengthOf5 = and(isString, hasLengthOf5);
isStringAndHasLengthOf5('12345') // => true
```

### isEqual
Simple comparison of two objects using the `===` operator.
```js
isEqual(first, second) => boolean

isEqual(5, 3) // => false
```

### isInstanceOf
Instance check using the `instanceof` operator.

```js
isInstanceOf(constructor, instance) => boolean

const date = new Date();
isInstanceOf(Date, date) // => true
```

pending for docs...

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
