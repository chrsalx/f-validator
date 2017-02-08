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

### functions

Whole lotta them!
#### or(...functions)
#### not(...functions)
#### and(...functions)
#### isEqual(first, second)
#### isInstanceOf(constructor, instance)
#### isMatch(expression, string)
#### isOk(truthy)
#### isTypeOf(type, object)
#### isUndefined(object)
#### isNull(object)
#### hasLengthOf(iterable, length)
#### isString(string)
#### isNumber(number)
#### isBoolean(boolean)
#### isObject(object)
#### isDate(date)
