const Search = require("../models/Search");

class searchServices {
  static async getAll() {
    try {
      const allSearch = await Search.findAll();
      return { error: false, data: allSearch };
    } catch (error) {
      return { error: true, data: "Publicaciones no encontradas" };
    }
  }

  static async create() {
    try {
      const newSearch = Search.create(req.body);

      return { error: false, data: newSearch };
    } catch (error) {
      return { error: true, data: "No se puedo crear una nueva Publicacion" };
    }
  }

  static async getOne(id) {
    try {
      const data = await Search.findAll(id);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found",
      };
    }
  }
}

module.exports = searchServices;
