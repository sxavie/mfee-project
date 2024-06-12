import postsApi from '../api/posts/postsApi';

export const getPosts = async () => {
  let posts = [];

  await postsApi
    .get('http://localhost:3031/posts')
    .then(({ data }) => {
      posts = data;
    })
    .catch((e) => console.error(e));

  return posts;
};

/* Activity 15: Using axios */
