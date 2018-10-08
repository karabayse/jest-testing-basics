const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBe (does not work on an object or an array)
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Test passes, because null is falsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// Test fails, because 'toBe' is for primitive types whereas
// an object or an array is a reference type in JS  ->  should use 'toEqual'
test('User should be Kara Bayse object', () => {
  expect(functions.createUser()).toBe({ firstName: 'Kara', lastName: 'Bayse'});
});

// toEqual
test('User should be Kara Bayse object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Kara', lastName: 'Bayse'});
});
