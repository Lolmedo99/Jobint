"use strict";
const S = require('sequelize');
const db = require("../../config/db.js");

  class Search extends S.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Search.init({
    country: S.STRING,
    area: S.STRING,
    position: S.STRING,
    description: S.TEXT,
    vacancies: S.INTEGER,
    status: S.STRING,
    time: S.DATEONLY,
    jobSchedules: S.STRING,
    salary: S.INTEGER,
    title: S.STRING,
    category: S.STRING
  }, {
    sequelize: db,
    modelName: 'Search',
  });

    module.exports = Search;