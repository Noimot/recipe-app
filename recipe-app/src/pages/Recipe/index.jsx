import React, { useState } from "react";
import Layout from "../../components/Layout";
import SmallestCard from "../../components/recipe-cards/SmallestCard";
import { useQuery, useQueryClient } from "react-query";
import { getAllRecipes } from "../../../service/recipe";
import { useNavigate } from "react-router-dom";



const Recipe = () => {
    const query = useQuery("recipes", getAllRecipes);
    const allRecipes = query?.data?.data?.allRecipes;
    const navigate = useNavigate();
    const goToAddRecipePage = () => {
      navigate("/recipe/add-recipe");
    }
  return (
    <Layout recipePage>
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Recipe</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      <div className="receipe-post-area section-padding-80">
        {/* Receipe Post Search */}
        <div className="receipe-post-search mb-80">
          <div className="container">
            <form action="#" method="post">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Recipes"
                  />
                </div>
                <div className="col-3 text-right">
                  <button type="submit" className="btn delicious-btn">
                    Search
                  </button>
                </div>
                <div className="col-3 text-right">
                    <button className="btn delicious-btn" type="button" onClick={goToAddRecipePage}>
                      Add Recipe
                    </button>
                  </div>
              </div>
            </form>
          </div>
        </div>        
        {/* Receipe Content Area */}
        <div className="receipe-content-area">
          <div className="container">
          <div className="row">
            {/* Small Receipe Area */}
            {allRecipes &&
              allRecipes?.map((data) => (
                <SmallestCard createdAt="January 04, 2018" name={data.name} id={data?.id} key={data.id}/>
              ))}
          </div>
           </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
