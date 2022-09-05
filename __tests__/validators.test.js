import {
  required,
  shouldBeEquals,
  shouldBeGTE,
  shouldBeLTE,
  shouldBeValidEmail,
} from '../src/validators'

test('required', () => {
  expect(required('Error')(undefined)).toBe('Error');
  expect(required('Error')('value')).toBeUndefined();
});

test('shouldBeEquals', () => {
  expect(shouldBeEquals('Error')('string', 'string2')).toBe('Error');
  expect(shouldBeEquals('Error')('string', 'string')).toBeUndefined();
});

test('shouldBeGTE', () => {
  expect(shouldBeGTE('Error')('string', 10)).toBe('Error');
  expect(shouldBeGTE('Error')('string', 6)).toBeUndefined();
  expect(shouldBeGTE('Error')('string', 5)).toBeUndefined();
  expect(() => {
    shouldBeGTE('Error')();
  }).toThrowError('Argument Error');
  expect(() => {
    shouldBeGTE('Error')('string');
  }).toThrowError('Argument Error');
});

test('shouldBeLTE', () => {
  expect(shouldBeLTE('Error')('string', 5)).toBe('Error');
  expect(shouldBeLTE('Error')('string', 6)).toBeUndefined();
  expect(shouldBeLTE('Error')('string', 10)).toBeUndefined();
  expect(() => {
    shouldBeLTE('Error')();
  }).toThrowError('Argument Error');
  expect(() => {
    shouldBeLTE('Error')('string');
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
