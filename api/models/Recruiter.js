"use strict";
const S = require('sequelize');
const db = require("../../config/db.js");

  class Recruiter extends S.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Recruiter.init(
    {
      email: S.STRING,
      password: S.STRING,
      name: S.STRING,
      lastName: S.STRING,
      country: S.STRING,
      description: S.TEXT,
      experienceField: S.STRING,
      rating: S.INTEGER,
      activeSearchs: S.INTEGER,
    },
    {
      sequelize: db,
      modelName: "Recruiter",
    })

    module.exports = Recruiter;