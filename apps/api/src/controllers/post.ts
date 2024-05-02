import Post from '../models/post';
import Comment from '../models/comment';

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const createPostComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.create(req.body);
    if (comment) {
      const commentId = comment._id;
      await Post.findByIdAndUpdate(id, { $push: { comments: commentId } }, { new: true });
      res.status(201).json(comment);
    } else {
      return res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).populate('category').populate('comments');
    if (!post) {
      return res.status(400).json({ message: 'Not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('category').populate('comments');
    res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    return res.status(204).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await Post.find({ category: category }).populate('category').populate('comments');
    if (!posts) {
      return res.status(404).json({ message: 'Not found' });
    }
    return res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export default {
  createPost,
  createPostComment,
  getPostById,
  updatePostById,
  getAllPosts,
  deletePostById,
  getPostsByCategory
};
