import React from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import Layout from "../components/Layout";

const AddRecipe = () => {
  return (
    <Layout recipePage>
      <AddRecipeForm />
    </Layout>
  );
};

export default AddRecipe;
