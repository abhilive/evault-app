const jwt = require('jsonwebtoken');
const passport = require('passport');

const { User } = require('../../database');

function createToken(user) {
  return jwt.sign({ _id: user.user_id }, process.env.JWT_SECRET);
}

const Authentication = {};

Authentication.login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({ message: info.message });
      return;
    }
    res.status(200).json({ token: createToken(user) });
  })(req, res, next);
};

Authentication.register = async (req, res, next) => {
  try {
    const { role, uname, gender, email, phone, password } = req.body;
    if (!role || !uname || !gender || !email || !phone || !password) {
      return res.status(500).json({
        message: 'All fields are required',
      });
    }
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(422).json({ message: 'Email is already in use' });
    }
    
    const newUser = new User({
      name: uname,
      gender,
      email,
      phone,
      password,
      public_address: null,
      roleId: role
    });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.status(200).json({ token: createToken(newUser) });
  } catch (error) {
    return next(error);
  }
};

module.exports = Authentication;
