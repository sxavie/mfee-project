import express from 'express';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

const router = express.Router();

const posts: Array<Post> = [];
//const comments: Array<Comment> = [];

router.get('/', (req, res) => {
  // Return an array of all the posts with status code 200
  res.status(200).json(posts);
});
router.get('/category/:category', (req, res) => {
  // Return an array of all the posts by category with status code 200
  const { category } = req.params;
  const filterByCategory = posts.filter((p) => p.category === category);
  res.status(200).json(filterByCategory);
});
router.get('/:id', (req, res) => {
  // Return a post by id with category object and each comment object in the array with status code 200
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.status(200).json(post);
});
router.post('/', (req, res) => {
  // Create a new post and return the created post with status code 201
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

  return res.status(201).json({ newPost });
});
router.post('/:id/comments', (req, res) => {
  // Create a comment inside the post and return the comment with status code 201
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

  return res.status(201).json({
    comment: newComment
    // post
  });
});
router.patch('/:id', (req, res) => {
  // Update post information and return the updated post with status code 200
  const { title } = req.body;
  const { id } = req.params;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  const post = posts.find((p: Post) => p.id === id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = title;

  return res.status(200).json({ post });
});
router.delete('/:id', (req, res) => {
  // Delete the post and return the deleted post with status code 200 or 204 if you decide to not return anything
  // * *Add 404 validation where needed*
  const { id } = req.params;

  const index = posts.findIndex((p: Post) => p.id === id);

  if (index === -1) return res.status(404).json({ message: 'Post not found' });

  posts.splice(index, 1);

  res.status(204).send();
});

export default router;
