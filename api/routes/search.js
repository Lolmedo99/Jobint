const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Search = require('../models/Search');

//devolver todas las busquedas
router.get('/:id', (req, res) => {
  Search.findAll({ where: { id: req.params.id } })
    .then((search) => {
      res.send(search);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Crea una busqueda
router.post('/add', (req, res) => {
  Search.create(req.body).then((user) => res.status(201).send(user));
});

//Elimina una busqueda
router.delete('/:id', (req, res) => {
  Search.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(202)
  );
});

//Modifica una busqueda
router.put('/:id', function (req, res, next) {
  const { id } = req.params;

  const response = (resSearch) => ({
    id,
    country: resSearch.contente,
    area: resSearch.contente,
    position: resSearch.contente,
    description: resSearch.contente,
    vacancy: resSearch.contente,
    status: resSearch.contente,
    time: resSearch.contente,
    jobsSchedules: resSearch.contente,
    title: resSearch.contente,
    category: resSearch.contente,
  });

  Search.update(
    {
      country: req.body.country,
      area: req.body.area,
      position: req.body.position,
      description: req.body.description,
      vacancy: req.body.vacancy,
      status: req.body.status,
      time: req.body.time,
      jobsSchedules: req.body.jobsSchedules,
      title: req.body.title,
      category: req.body.category,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then(([rows, result]) =>
      res.status(201).send(response(result[0])).status(202)
    )
    .catch(next);
});

//Encontrar por titulo -deberia tener mas opciones ajustadas al formulario-
router.post('/search', (req, res) => {
  Search.findAll({
    where: { title: { [Op.like]: `%${req.body.search}%` } },
  }).then((users) => res.send(users));
});

//Pagination simple
router.get('/list', (req, res) => {
  const { page } = req.query;
  let cant = page * 5;
  let offset = page === 1 ? 0 : cant - 5;
  Search.findAll({ limit: 5, offset: offset }).then((users) => res.send(users));
});

module.exports = router;
