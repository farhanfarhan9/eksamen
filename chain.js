function mockRequest() {
  const value = {};

  const methods = {
    getValue() {
      return value;
    },

    withCookie(cookie = {}) {
      Object.assign(value, {cookie: cookie});
      return methods;
    },

    withBody(body = {}) {
      Object.assign(value, {body: body});
      return methods;
    },

    withHeaders(headers = {}) {
      Object.assign(value, {headers: headers});
      return methods;
    }
  }

  return methods;
}

console.log(
  mockRequest()
  .withCookie({token: false})
  .withBody({username: 'katon'})
  .withHeaders({'Content-Type': 'application/json'})
  .getValue()
);
