import { Post } from '../models/post';
import { Comment } from '../models/comment';

const posts: Array<Post> = [];
// const comments: Array<Comment> = [];

const getPosts = async (req, res) => {
  try {
    // Return an array of all the posts with status code 200
    res.status(200).json(posts);
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPostsByCategoryId = async (req, res) => {
  try {
    const { category } = req.params;
    const filterByCategory = posts.filter((p) => p.category === category);
    // Return an array of all the posts by category with status code 200
    res.status(200).json(filterByCategory);
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    // Return a post by id with category object and each comment object
    // in the array with status code 200
    res.status(200).json(post);
  } catch (error) {
    errorHandler(error, res);
  }
};

const createPost = async (req, res) => {
  const { title, image, description, category } = req.body;

  if (!title || !image || !description || !category) return res.status(400).json({ message: 'Fields required ' });

  const newPost: Post = {
    id: Date.now().toString(),
    title,
    image,
    description,
    category,
    comments: []
  };

  posts.push(newPost);

  // Create a new post and return the created post with status code 201
  return res.status(201).json({ newPost });
};

const addComment = async (req, res) => {
  const { author, content } = req.body;
  const { id } = req.params;

  if (!author || !content) return res.status(400).json({ message: 'author and content are required' });

  const post = posts.find((p: Post) => p.id === id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  const newComment: Comment = {
    id: `cm-${Date.now().toString()}`,
    author,
    content
  };
  post.comments.push(newComment.id);

  // Create a comment inside the post and return the comment with status code 201
  return res.status(201).json({
    comment: newComment
    // post
  });
};

const updatePostTitle = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  const post = posts.find((p: Post) => p.id === id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = title;

  // Update post information and return the updated post with status code 200
  return res.status(200).json({ post });
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const index = posts.findIndex((p: Post) => p.id === id);

  if (index === -1) return res.status(404).json({ message: 'Post not found' });

  posts.splice(index, 1);

  // Delete the post and return the deleted post with status code 200 or 204
  // if you decide to not return anything
  res.status(204).send();
};

// * *Add 404 validation where needed*

const errorHandler = (error, response) => {
  const { message } = error;
  response.status(500).json({ message });
};

export default {
  getPosts,
  getPostsByCategoryId,
  getPostById,
  createPost,
  addComment,
  updatePostTitle,
  deletePost
};
