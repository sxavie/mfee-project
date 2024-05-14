import categoriesApi from '../api/categories/categoriesApi';

export const getCategories = async () => {
  let categories = [];

  await categoriesApi
    .get('http://localhost:3000/categories')
    .then(({ data }) => {
      categories = data;
    })
    .catch((e) => console.error(e));

  return categories;
};
