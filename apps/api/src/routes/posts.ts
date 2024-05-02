import express from 'express';
import postsController from '../controllers/post';

const router = express.Router();

// Create a post
router.post('/', postsController.createPost);

// Create a post comment
router.post('/:id/comments', postsController.createPostComment);

// Get a post by id
router.get('/:id', postsController.getPostById);

// Update a post
router.patch('/:id', postsController.updatePostById);

// Get all posts
router.get('/', postsController.getAllPosts);

// Delete a post
router.delete('/:id', postsController.deletePostById);

// Get posts by category
router.get('/category/:category', postsController.getPostsByCategory);

export default router;
