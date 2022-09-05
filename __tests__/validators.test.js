import {
  required,
  shouldBeEqualWith,
  shouldBeGTE,
  shouldBeLTE,
  shouldBeValidEmail,
  shouldBeEqualLength,
} from '../src/validators'

test('required', () => {
  expect(required('Error')(undefined)).toBe('Error');
  expect(required('Error')('value')).toBeUndefined();
});

test('shouldBeEquals', () => {
  expect(shouldBeEqualWith('string2', 'Error')('string')).toBe('Error');
  expect(shouldBeEqualWith('string', 'Error')('string')).toBeUndefined();
});

test('shouldBeGTE', () => {
  expect(shouldBeGTE(10, 'Error')('string')).toBe('Error');
  expect(shouldBeGTE(6, 'Error')('string')).toBeUndefined();
  expect(shouldBeGTE(5, 'Error')('string')).toBeUndefined();
  expect(() => {
    shouldBeGTE()('string');
  }).toThrowError('Argument Error');
  expect(() => {
    shouldBeGTE('not a number')();
  }).toThrowError('Type Error');
});

test('shouldBeLTE', () => {
  expect(shouldBeLTE(5, 'Error')('string')).toBe('Error');
  expect(shouldBeLTE(6, 'Error')('string')).toBeUndefined();
  expect(shouldBeLTE(10, 'Error')('string')).toBeUndefined();
  expect(() => {
    shouldBeLTE('not a number')();
  }).toThrowError('Type Error');
  expect(() => {
    shouldBeLTE()();
  }).toThrowError('Argument Error');
});

test('shouldBeEqualLength', () => {
  expect(shouldBeEqualLength(10, 'Error')('string')).toBe('Error');
  expect(shouldBeEqualLength(6, 'Error')('string')).toBeUndefined();
  expect(shouldBeEqualLength(7, 'Error')('string2')).toBeUndefined();
  expect(shouldBeEqualLength(6, 'Error')('string2')).toBe('Error');
  expect(() => {
    shouldBeEqualLength('not a number')();
  }).toThrowError('Type Error');
  expect(() => {
    shouldBeEqualLength()();
  }).toThrowError('Argument Error');
});

test('shouldBeValidEmail', () => {
  expect(shouldBeValidEmail('Error')('string')).toBe('Error');
  expect(shouldBeValidEmail('Error')('string@')).toBe('Error');
  expect(shouldBeValidEmail('Error')('string@str')).toBe('Error');
  expect(shouldBeValidEmail('Error')('string@com')).toBe('Error');
  expect(shouldBeValidEmail('Error')('string@uz')).toBe('Error');
  expect(shouldBeValidEmail('Error')('string@str.uz')).toBeUndefined();
  expect(shouldBeValidEmail('Error')('string@str.com')).toBeUndefined();
  expect(() => {
    shouldBeValidEmail('Error')();
  }).toThrowError('Argument Error');
});
