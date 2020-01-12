const subject = require('../index');

test('must throw error when no sending token', () => {
  const next = jest.fn();
  expect(() => subject.verifyToken({}, null, next)).toThrow('Invalid credentials');
  expect(next).not.toHaveBeenCalled();
});

test('must throw error if token isn\'t valid', () => {
  const req = {
    cookies: {
      token: 456
    }
  };

  const next = jest.fn();
  expect(() => subject.verifyToken(req, null, next)).toThrow('Invalid credentials');
  expect(next).not.toHaveBeenCalled();
});


test('next() must be called if valid token is provied', () => {
  const req = {
    cookies: {
      token: 123
    }
  };

  const next = jest.fn();
  expect(() => subject.verifyToken(req, null, next)).not.toThrow();
  expect(next).toHaveBeenCalledTimes(1);
});
