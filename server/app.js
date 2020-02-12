const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models');
const flash = require('connect-flash');
const passport = require('passport');
const passportConfig = require('./passport');
require('dotenv').config();

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();
sequelize.sync();
passportConfig(passport);
app.set('port', 8000);
app.set('jwt-secret', process.env.JWT_SECRET);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use('/image/post', express.static(path.join(__dirname, 'uploads/posts')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false // true recommanded
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // res.locals.message = err.message;
  console.error(err);
  return res.status(err.status || 500).send({ message: err.message });
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} 서버실행..`)
});