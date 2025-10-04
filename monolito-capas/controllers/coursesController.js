const coursesService = require("../services/coursesService");

const createCourse = (req, res) => {
  const newCourse = coursesService.create(req.body);
  res.send(`Curso ${newCourse.name} agregado exitosamente.`);
};

const listCourse = (req, res) => {
  const list = coursesService.list();
  res.json(list);
};

module.exports = { createCourse, listCourse };
