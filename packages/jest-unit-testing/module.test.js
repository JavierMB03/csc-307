// module.test.js
import mut from './module.js'; 

test('sum adds two numbers correctly', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});


test('div divides two positive numbers', () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test('div handles division by fractions', () => {
  const expected = 2.5;
  const got = mut.div(5, 2);
  expect(got).toBe(expected);
});

test('div returns Infinity when dividing by zero', () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity);
});


test('containsNumbers returns true when text has digits', () => {
  const result = mut.containsNumbers('abc123');
  expect(result).toBe(true);
});

test('containsNumbers returns false when text has no digits', () => {
  const result = mut.containsNumbers('abcdef');
  expect(result).toBe(false);
});

test('containsNumbers returns true when text starts with a number', () => {
  const result = mut.containsNumbers('3dogs');
  expect(result).toBe(true);
});

test('containsNumbers returns false for empty string', () => {
  const result = mut.containsNumbers('');
  expect(result).toBe(false);
});


test('containsNumbers returns false for spaces', () => {
  const result = mut.containsNumbers('   ');
  expect(result).toBe(false);
});
