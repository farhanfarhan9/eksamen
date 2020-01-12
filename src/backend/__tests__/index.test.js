const request = require('supertest');
const subject = require('../index');

describe('auth routes', () => {
  describe('auth/login', () => {
    test('should response 401 when post no body', () => {
      return request(subject)
        .post('/api/auth/login')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response 401 when sending invalid credentials', () => {
      return request(subject)
        .post('/api/auth/login')
        .send({username: 'katon', password: 'test'})
        .then(res => {
          expect(res.statusCode).toBe(401);
          expect(res.body).toHaveProperty('error', true);
        })
    });

    test('should response 200 when sending valid credentials', () => {
      return request(subject)
        .post('/api/auth/login')
        .send({username: 'katon', password: 'atmaja'})
        .then(res => {
          expect(res.body).toHaveProperty('error', false);
          expect(res.statusCode).toBe(200);
        })
    });
  });

  describe('auth/information', () => {
    test('should response 401 when post no cookie token', () => {
      return request(subject)
        .post('/api/auth/information')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response 401 when sending invalid cookie', () => {
      return request(subject)
        .post('/api/auth/information')
        .then(res => {
          expect(res.statusCode).toBe(401);
          expect(res.body).toHaveProperty('error', true);
        })
    });

    test('should response 200 when sending valid cookie', () => {
      return request(subject)
        .post('/api/auth/information')
        .set('Cookie', ['token=123'])
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
    });
  });
});

describe('exam routes', () => {
  describe('exams', () => {
    test('should response 401 when unauthenticated', () => {
      return request(subject)
        .get('/api/exams')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response list of exams if authenticated', () => {
      return request(subject)
        .get('/api/exams')
        .set('Cookie', ['token=123'])
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });

  describe('exam/:id', () => {
    test('should response 401 when unauthenticated', () => {
      return request(subject)
        .get('/api/exam/1')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response list of exams if authenticated', () => {
      return request(subject)
        .get('/api/exam/1')
        .set('Cookie', ['token=123'])
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });

  describe('exam/:id/take', () => {
    test('should response 401 when unauthenticated', () => {
      return request(subject)
        .get('/api/exams')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response list of exams if authenticated', () => {
      return request(subject)
        .get('/api/exams')
        .set('Cookie', ['token=123'])
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });

  describe('exam/:id/finish', () => {
    test('should response 401 when unauthenticated', () => {
      return request(subject)
        .get('/api/exams')
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });

    test('should response list of exams if authenticated', () => {
      return request(subject)
        .get('/api/exams')
        .set('Cookie', ['token=123'])
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });
});
