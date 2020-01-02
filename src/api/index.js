import express from 'express';

const app = express();

app.get('/version', (req, res) => res.json({version: '0.1.1'}));

app.get('/auth/information', function (req, res) {
  res.json({error: false, message: 'Cookie not valid.'});
});

app.post('/auth/login', async (req, res) => {
  res.json({
    error: false,
    message: 'Login successfully.',
  });
});
//
app.delete('/auth/logout', (req, res) => {
  // logout from service.
});

app.get('/exams', (req, res) => {
  // get list of exams.
});

app.post('/exam/take', (req, res) => {
  // take an exam, body must sening an exam id and answers.
});

app.get('/exam/finish', (req, res) => {
  // finishing exam.
});

export default app;
