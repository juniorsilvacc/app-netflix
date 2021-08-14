const User = require('../models/User');

module.exports = {
  async createSignup (req, res){

    const {name, email, password} = req.body;

    try {

      const emailExists = await User.findOne({email})
      if(emailExists){
        return res.status(400).json({message: 'E-mail does exist.'});
      }

      const createUser = await User.create({
        name,
        email,
        password
      });

      return res.status(200).json({message: 'Successfully registered user.', data: createUser});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to signup.'});
    }

  }
}