const Post = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPost = async (req, res) => {
  try {
    const { name, content } = req.body;

    const post = new Post({
      name,
      content,
    });

    const result = await post.save();
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.deleteOne({ _id: id });
    console.log(id);
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = req.body;

    const result = await Post.updateOne({ _id: id }, { $set: updatedPost });
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPosts, addPost, deletePost, updatePost };
