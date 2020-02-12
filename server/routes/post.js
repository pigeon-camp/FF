const express = require('express');
const multer = require('multer');
const path = require('path');
const { Post, User } = require('../models');
const { isLoggedIn, isNotLoggedIn, verifyToken } = require('./authMiddleware');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      console.log('desti');
      cb(null, 'uploads/posts');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
    }
  }),
  limit: { fileSize: 3 * 1024 * 1024 * 12 }
});

router.post('/', isLoggedIn, upload.array('imgPost', 12), async (req, res, next) => {
  try {
    const images = [];
    const { title, content } = JSON.parse(req.body.postInfo);
    for (let i=0; i < req.files.length; i++) {
      images.push(`${req.files[i].filename}`);
    }
    await Post.create({
      title,
      content,
      images,
      userId: req.user.id
    });
    res.status(200).send('작성완료');
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: {
        model: User
      }
    });
    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    next(error);
  }
})
module.exports = router;