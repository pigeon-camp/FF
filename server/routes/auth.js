const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn, verifyToken } = require('./authMiddleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const userAll = await User.findAll();
  return res.status(200).json({ userAll }); 
});

router.get('/check', verifyToken, (req, res, next) => {
  jwt.verify(req.session.token, req.app.get('jwt-secret'), (err, decoded) => {
    return res.status(200).json({ user: decoded });
  })
});

router.post('/signup', isNotLoggedIn, async(req, res, next) => {
  const { userId, password, name } = req.body;
  try {
    const exUser = await User.findOne({ where: { userId }});
    const howManyUser = await User.findAll();
    if (exUser) {
      req.flash('이미 가입된 유저');
      return next({ message: '이미 가입된 유저에요. '});
    } else {
      // 처음 가입한 사람은 admin
      let admin = false;
      if (howManyUser === null) admin = true;
      const salt = bcrypt.genSaltSync(12);
      const hash = await bcrypt.hashSync(password, salt);
      await User.create({ 
        userId, 
        password: hash, 
        name,
        admin 
      });
      return res.status(200).send('가입 완료');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError);
    }
    if (!user) {
      req.flash('loginError', info.message);
      return next({ message: '유저 정보 불일치. '});
    }
    return req.login(user, (loginError) => {
      if(loginError) return next(loginError);
      const secret = req.app.get('jwt-secret');
      jwt.sign({
        id: user.id,
        userId: user.userId,
        admin: user.admin,
        name: user.name
      },
        secret,
        {
          expiresIn: '5h',
          issuer: 'CAMPER'    
        }, (err, token) => {
          if (err) return({ message: 'jwt 에러'});
          req.session.token = token;
          return res.status(200).json({
            message: '로그인 성공',
            token
          })
        }
      )
    })
  })(req, res, next);
});

router.delete('/signout', isLoggedIn ,(req, res, next) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('로그아웃 완료');
});

module.exports = router;