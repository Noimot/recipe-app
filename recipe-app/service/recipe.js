import axios from "../utils/axios";

export const getAllRecipes = async () => {
  let response = await axios.get("/recipes");
  return response.data;
};
export const getRecipeById = async (id) => {
  let response = await axios.get(`/recipes/${id}`);
  console.log(response);
  return response.data;
};

export const addRecipe = async (recipe) => {
    let response = await axios.post(`/recipes/create`, recipe);
    console.log(response);
    return response.data;
  };

export const addComment = async (comment) => {
  let response = await axios.post(`/recipes/comment/create`, comment);
  console.log(response);
  return response.data;
};
export const getComments = async () => {
    let response = await axios.get(`/recipes/comment`);
    console.log(response);
    return response.data;
  };
