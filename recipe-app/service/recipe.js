import axios from "../utils/axios";

export const getAllRecipes = async () => {
  let response = await axios.get("/recipes");
  return response.data;
};
export const getRecipeById = async (id) => {
  let response = await axios.get(`/recipes/${id}`);
  return response.data;
};

export const addRecipe = async (recipe) => {
  let response = await axios.post(`/recipes/create`, recipe, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
export const updateRecipe = async (id, recipe) => {
  let response = await axios.put(`/recipes/${id}`, recipe, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
  return response.data;
};

export const deleteRecipe = async (id) => {
  let response = await axios.delete(`/recipes/${id}`);
  console.log(response);
  return response.data;
};

export const searchRecipes = async (name) => {
  const response = await axios.get("/recipes", {
    params: { name },
  });
  return response.data;
};

export const addComment = async (comment) => {
  let response = await axios.post(`/recipes/comment/create`, comment);
  return response.data;
};

export const getComments = async () => {
  let response = await axios.get(`/recipes/comment`);
  return response.data;
};
export const getCommentsByRecipeId = async (recipeId) => {
  let response = await axios.get(`/recipes/comment/${recipeId}`);
  return response.data;
};

export const updateComment = async (id, comment) => {
  let response = await axios.put(`/recipes/comment/${id}`, comment);
  console.log(response);
  return response.data;
};

export const deleteComment = async (id) => {
  let response = await axios.delete(`/recipes/comment/${id}`);
  console.log(response);
  return response.data;
};
