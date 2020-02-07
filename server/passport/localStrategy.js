const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const bcrypt = require('bcrypt-nodejs');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'password'
  }, async (userId, password, done) => {
    try {
      const exUser = await User.findOne({ where: { userId }});
      if (!exUser) done(null, false, { message: '가입외지 않은 회원'});
      else {
        const result = await bcrypt.compareSync(password, exUser.password);
        if (result) done(null, exUser);
        else done(null, false, { message : '비밀번호 불일치'});
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
}
