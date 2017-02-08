/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const test = require('tape');

const validators = require('./validators.es6');

const getTrue = () => true;
const getFalse = () => false;

test('Testing and:', (t) => {
  const { and } = validators;
  t.ok(and(getTrue, getTrue, getTrue)());
  t.notOk(and(getTrue, getTrue, getFalse)());
  t.end();
});

test('Testing or:', (t) => {
  const { or } = validators;
  t.ok(or(getTrue, getFalse, getFalse)());
  t.notOk(or(getFalse, getFalse, getFalse)());
  t.end();
});

test('Testing not:', (t) => {
  const { not } = validators;
  t.ok(not(getFalse)());
  t.notOk(not(getTrue)());
  t.end();
});

test('Testing isEqual:', (t) => {
  const { isEqual } = validators;
  t.ok(isEqual(1, 1));
  t.ok(isEqual(undefined, undefined));
  t.ok(isEqual(true, true));
  t.ok(isEqual('', ''));
  t.notOk(isEqual(1, '1'));
  t.notOk(isEqual(true, false));
  t.notOk(isEqual(false, 0));
  t.end();
});

test('Testing isNumber:', (t) => {
  const { isNumber } = validators;
  const possibleValues = [-1, 2, -1111111, 34355455, 0, NaN, 33435566, 24.66];
  const impossibleValues = ['', '123', null, undefined, true, false, [], {}];
  possibleValues.forEach(v => t.ok(isNumber(v)));
  impossibleValues.forEach(v => t.notOk(isNumber(v)));
  t.end();
});

test('Testing isString:', (t) => {
  const { isString } = validators;
  const possibleValues = ['1', 'true', 'false', 'undefined', 'abc', ''];
  const impossibleValues = [123, 1.2, 0, -10, null, undefined, true, false, {}, []];
  possibleValues.forEach(v => t.ok(isString(v)));
  impossibleValues.forEach(v => t.notOk(isString(v)));
  t.end();
});

test('Testing isBoolean:', (t) => {
  const { isBoolean } = validators;
  const possibleValues = [true, false];
  const impossibleValues = [123, 1.2, 0, -10, null, undefined, '', '123', {}, []];
  possibleValues.forEach(v => t.ok(isBoolean(v)));
  impossibleValues.forEach(v => t.notOk(isBoolean(v)));
  t.end();
});
