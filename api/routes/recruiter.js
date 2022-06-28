const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//devolver todas los reclutadores
router.get("/", (req, res) => {
  Recruiter.findAll()
    .then((search) => {
      res.send(search);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Crea un reclutador
router.post("/", (req, res) => {
  const { name, lastName, country } = req.body;
  Recruiter.findOne({ where: { name, lastName, country } }).then((result) => {
    if (result === null) {
      Recruiter.create(req.body).then((user) => res.status(201).send(user));
    } else {
      res.status(401).send();
    }
  });
});

//Modifica una busqueda -modificar rating-
/* router.put('/:id', function (req, res, next) {
  const { id } = req.params;

  const response = (resReclut) => ({
    id,
    name: resReclut.contente,
    lastname: resReclut.contente,
    country: resReclut.contente,
    description: resReclut.contente,
    experienceField: resReclut.contente,
    rating: resReclut.contente,
  });

  Recruiter.update(
    {
      name: req.body.name,
      lastname: req.body.lastname,
      country: req.body.country,
      description: req.body.description,
      experienceField: req.body.experienceField,
      rating: req.body.rating,
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
}); */

//Elimina un reclutador
router.delete("/:id", (req, res) => {
  Recruiter.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(202)
  );
});

//Pagination simple
router.get("/list", (req, res) => {
  let { page } = req.query;
  Number(page);
  console.log(page);
  let cant = page * 5;
  let offset = page === 1 ? 0 : cant - 5;
  Recruiter.findAll({ limit: 5, offset: offset }).then((users) =>
    res.send(users)
  );
});

//Encontrar por nombre -deberia tener mas opciones ajustadas al formulario-
router.post("/search", (req, res) => {
  Recruiter.findAll({
    where: { name: { [Op.like]: `%${req.body.search}%` } },
  }).then((users) => res.send(users));
});

module.exports = router;
