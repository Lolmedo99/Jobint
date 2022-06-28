const searchServices = require("../services/searchServices");
const Search = require("../models/Search");

class RouterSearch {
  static async allSearch(req, res) {
    const { error, data } = await searchServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async createSearch(req, res) {
    const { error, data } = await searchServices.create();

    if (error) {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  }

  static async edit(req, res) {
    const { id } = req.params;

    const {
      country,
      area_search,
      position,
      description,
      jobSchedules,
      vacancies,
      salary,
      title,
      category,
    } = req.body;

    Search.update(
      {
        country,
        area_search,
        position,
        description,
        jobSchedules,
        vacancies,
        salary,
        title,
        category,
      },
      { where: { id } }
    )
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(404).send(err));
  }

  static async getOne(req, res) {
    const { error, data } = await searchServices.getOne({
      where: { id: req.params.id },
    });
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }
}

module.exports = RouterSearch;
