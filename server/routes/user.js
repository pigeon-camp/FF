const express = require('express');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
const { Post, User } = require('../models');
const { isLoggedIn, isNotLoggedIn, verifyToken } = require('./authMiddleware');

const router = express.Router();

router.patch('/:id', async (req, res, next) => {
  try {
    const { name, password, image } = req.body.userInfo;
    console.log(name, password, image);
    const salt = bcrypt.genSaltSync(12);
    const hash = await bcrypt.hashSync(password, salt);
    await User.update({
      name,
      password: hash,
      image
    }, { where: { id: req.params.id }})
    res.send('%%')

  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;