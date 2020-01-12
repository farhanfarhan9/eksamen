const subject = require('../auth');

class mockRequest {
  constructor() {
    this.value = {};
  }

  withCookie(cookie = {}) {
    Object.assign(this.value, {cookie: cookie})
    return this;
  }

  withBody(body = {}) {
    Object.assign(this.value, {body: body});
    return this;
  }

  withHeaders(headers = {}) {
    Object.assign(this.value, {headers: headers});
    return this;
  }
}

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe('controllers/routes auth.js', () => {
  describe('#auth@login', () => {
    it('should throw error when got invalid credentials', () => {
      const req = new mockRequest().withBody({}).value;
      const res = mockResponse();
      expect(() => subject.login(req, res)).toThrow('Invalid credentials');
    });

    it('should return 200 when got valid credentials', () => {
      const req = new mockRequest().withBody({username: 'katon', password: 'atmaja'}).value;
      const res = mockResponse();
      expect(() => subject.login(req, res)).not.toThrow();
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({error: false, message: 'Authenticated.'});
    });
  });

  describe('#auth@information', () => {
    it('should return 200 when got cookie headers', () => {
      const req = new mockRequest().withCookie({token: '123'}).value;
      const res = mockResponse();
      subject.information(req, res);
    });
  })
})
