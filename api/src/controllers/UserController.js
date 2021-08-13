const User = require('../models/User');

module.exports = {
  async createSignup (req, res){

    const {email, password} = req.body;

    try {

      const createUser = await User.create({
        email,
        password
      })

      return res.status(200).json({message: 'Successfully registered user.', data: createUser});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to signup.'});
    }

  }
}