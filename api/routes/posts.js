const router = require("express").Router();

const { getPosts } = require("../controllers/posts");

//CRUD operations
router.get("/", getPosts);

// router.post("/:id", addPost);

// router.delete("/id", deletePost);

// router.patch("/:id", updatePost);

module.exports = router;
