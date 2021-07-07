const express = require("express");
const { getPosts, createPost } = require("../controllers/posts");
const router = express.Router();

const auth =  require('../middleware/auth')

router.route('/')
      .get(getPosts)
      .post(createPost)

module.exports = router