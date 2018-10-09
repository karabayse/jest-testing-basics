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

// Less than and greater than
// toBeLessThan
// toBeLessThanOrEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regular Expressions
test('There is no I or i in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['jane', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data
test('User fetched name should be Leanna Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
      expect(data.name).toEqual('Leanne Graham')
    });
});

// Async Await
test('User fetched name should be Leanna Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
      expect(data.name).toEqual('Leanne Graham');
});
