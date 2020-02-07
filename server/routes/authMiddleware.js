const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else return next({ message: '로그인이 필요함. '});
  // else res.status(403).send('로그인 필요');
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) next();
  else return next({ message: '이미 로그인 되어있음 '});
  // else res.status(403).send('이미 로그인');
}

exports.verifyToken = (req, res, next) => {
  const token = req.session.token;
  console.log(token);
  if (!token) return next({ message: '로그인 되어있지 않아요. '});;
  jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
    if (err) return next({ message: '토큰 기한만료 및 토큰 에러'});
    else next();
  })
}