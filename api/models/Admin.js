"use strict";
const S = require('sequelize');
const db = require("../../config/db.js");

  class Admin extends S.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Admin.init({
    name: S.STRING,
    lastName: S.STRING,
    email: S.STRING,
    password: S.STRING
  }, {
    sequelize: db,
    modelName: 'Admin',
  });

    module.exports = Admin;