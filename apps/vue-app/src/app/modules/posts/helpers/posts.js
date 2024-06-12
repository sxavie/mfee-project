import postsApi from '../api/posts/postsApi';

const url = 'http://localhost:3031/posts';

export const getPosts = async () => {
  let posts = [];

  await postsApi
    .get(url)
    .then(({ data }) => {
      posts = data;
    })
    .catch((e) => console.error(e));

  return posts;
};

/*✅ Activity 15: Using axios */

export const getById = async (id) => {
  let post = [];

  await postsApi
    .get(`${url}/${id}`)
    .then(({ data }) => {
      post = data;
    })
    .catch((e) => console.log(e));

  return post;
};

export const createPost = async (post) => {
  await postsApi
    .post(`${url}`, post)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

export const updatePost = async (post) => {
  await postsApi
    .patch(`${url}/${post.id}`, post)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

export const deletePost = async (id) => {
  await postsApi
    .delete(`${url}/${id}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};
