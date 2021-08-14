const User = require('../models/User');

module.exports = {
  async signin (req, res){

    const {email, password} = req.body;

    try {

      const validEmail = await User.findOne({email});
      if(!validEmail){
        return res.status(400).json({message: 'E-mail does not exist.'});
      }

      const validPassword = await User.findOne({
        password: password
      }).where({
        email: email
      });

      const logged = validPassword;
      if(!logged) {
        return res.status(400).json({message: 'Incorrect login or password.'});
      }

      return res.status(200).json({message: 'Loggedin successfully.'})
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to signin.'});
    }

  }
}