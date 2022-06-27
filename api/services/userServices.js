const User = require("../models/User");

class UserServices {
  static async createUser(body) {
    const { name, lastName, email, password } = body;
   

    try {
      const newUser = await User.findOrCreate({
        where: { email },
        defaults: {
          name,
          lastName,
          password,
        },
      });

      return { error: false, data: newUser };
    } catch (error) {
      console.log(error);

      return { error: true, data: error };
    }
  }


  

}

module.exports = UserServices;