import Post from '../models/post';
import Comment from '../models/comment';

// Get all the posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('category');
    //Return all the posts with a 200 status code
    res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Get post by Category
const getPostsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    // Check if the post exists with that Id
    const posts = await Post.find({ category: category }).populate('category');

    if (!posts) {
      // If we don't find the post return a 404 status code with a message
      return res.status(404).json({ message: 'Posts not found in that category' });
    }
    res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Get post by id
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the post exists with that Id
    const post = await Post.findById(id).populate('comments').populate('category');
    if (!post) {
      // If we don't find the post return a 404 status code with a message
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Create a post
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    // return the created post with a 201 status code
    res.status(201).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Create a comment

const createComment = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the post exists with that Id
    const post = await Post.findById(id);
    if (!post) {
      // If we don't find the post return a 404 status code with a message
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = await Comment.create(req.body);
    if (!comment) {
      return res.status(400).json({ message: 'Comment not created' });
    }
    post.comments.push(comment._id);
    await post.save();

    // return the created comment with a 201 status code
    res.status(201).json(comment);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Update a post
const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// Delete a post

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    //Delete the related comments to this post
    await Comment.deleteMany({ _id: { $in: post.comments } });
    const deletedPost = await Post.findByIdAndDelete(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export default {
  getPosts,
  getPostsByCategory,
  getPostById,
  createPost,
  createComment,
  updatePost,
  deletePost
};
