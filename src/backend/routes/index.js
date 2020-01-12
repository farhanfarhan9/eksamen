const router = require('express').Router();
const auth = require('./auth');
const exam = require('./exam');
const middlewares = require('../middlewares');

// Authentication related routes;
router.post('/auth/information', middlewares.verifyToken, auth.information);
router.post('/auth/login', auth.login);
router.delete('/auth/logout', auth.login);

// Exam related routes;
router.get('/exams', middlewares.verifyToken, exam.getAll);
router.get('/exam/:id', middlewares.verifyToken, exam.getById);
router.post('/exam/:id/take', middlewares.verifyToken, exam.takeById);
router.post('/exam/:id/finish', middlewares.verifyToken, exam.finishById);

// Exam Invigilator routes;

// Student account routes;

// Teacher account routes;


module.exports = router;
