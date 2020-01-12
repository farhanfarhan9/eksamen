const exam = {};

exam.getAll = (req, res) => {
  const exams = [];
  res.status(200).json({error: false, exams});
}

exam.getById = (req, res) => {
  const exam = {};

  res.status(200).json({error: false, exam});
}

exam.takeById = (req, res) => {

}

exam.finishById = (req, res) => {

}

module.exports = exam;
