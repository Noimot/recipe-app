import React from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import Layout from "../components/Layout";
import { useLocation } from 'react-router-dom';

const AddRecipe = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  return (
    <Layout recipePage>
      <AddRecipeForm recipeId={id} />
    </Layout>
  );
};

export default AddRecipe;
