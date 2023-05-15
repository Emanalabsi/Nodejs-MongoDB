const router = require("express").Router();

const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../controllers/posts");

router.get("/", getPosts);

router.post("/new", addPost);

router.delete("/:id", deletePost);

router.patch("/:id", updatePost);

module.exports = router;
