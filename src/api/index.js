import express from 'express';

const app = express();
app.get('/version', (req, res) => res.json({version: '0.1.0'}));

app.post('/auth/login', (req, res) => {
  // login to exams.
});

app.delete('/auth/logout', (req, res) => {
  // logout from service.
});

app.get('/exams', (req, res) => {
  // get list of exams
});

app.post('/exam/take', (req, res) => {
  // take an exam, body must sening an exam id and answers.
});

app.get('/exam/finish', (req, res) => {
  // finishing exam.
});

export default app;
