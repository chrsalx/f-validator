const or = (...fns) => val => fns.some(fn => fn(val));
const not = fn => val => !fn(val);
const and = (...fns) => val => fns.every(fn => fn(val));
const isEqual = (f, s) => f === s;
const isInstanceOf = (c, i) => i instanceof c;
const isMatch = (e, s) => s.match(e);
const isOk = val => !!val;
const isTypeOf = (t, o) => isEqual(typeof o, t);
const isUndefined = val => isEqual(val, undefined);
const isNull = val => isEqual(val, null);
const hasLengthOf = (l, v) => isEqual(v.length, l);
const isNumber = val => isTypeOf('number', val);
const isString = val => isTypeOf('string', val);
const isBoolean = val => isTypeOf('boolean', val);
const isObject = val => isTypeOf('object', val);
const isDate = val => isInstanceOf(Date, val);

module.exports = {
  or,
  not,
  and,
  isEqual,
  isInstanceOf,
  isMatch,
  isOk,
  isTypeOf,
  isUndefined,
  isNull,
  hasLengthOf,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isDate,
};
