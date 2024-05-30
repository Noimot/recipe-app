import React, { useEffect, useState } from "react";
import Ratings from "../components/Ratings";
import { useQuery, useQueryClient } from "react-query";
import { getAllRecipes, searchRecipes } from "../../service/recipe";
import MediumRecipeCard from "../components/recipe-cards/MediumRecipeCard";
import SmallRecipeCard from "../components/recipe-cards/SmallRecipeCard";
import SmallestCard from "../components/recipe-cards/SmallestCard";
import Layout from "../components/Layout";

const Home = ({title, setTitle}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [toggleSearch, setToggleSearch] = useState(false);

  // Queries
  const queryClient = useQueryClient();
  // const [title, setTitle] = useState("");
  const [queryTitle, setQueryTitle] = useState("");
  //   const query = useQuery("recipes", getAllRecipes);
  //   const allRecipes = query?.data?.data?.allRecipes;

  const query = useQuery(["recipes", queryTitle], () =>
    searchRecipes(queryTitle)
  );
  const allRecipes = query?.data?.data?.recipes;

  // const query = useQuery("recipes", getAllRecipes);
  // const allRecipes = query?.data?.data?.allRecipes;
  const firstRecipe = allRecipes?.[0];
  const secondRecipe = allRecipes?.[1];
  const firstSixRecipes = allRecipes?.slice(0, 6);
  const otherRecipes = allRecipes?.slice(6);
  console.log(query, "query", allRecipes);
  console.log(firstSixRecipes, "first sic recipes");

  const handlePrevSlide = () => {
    setActiveIndex(activeIndex - 1);
  };
  const handleNextSlide = () => {
    setActiveIndex(activeIndex + 1);
  };
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const handleSearch = () => {
    setQueryTitle(title);
  };
  const handleReset = () => {
    setQueryTitle("");
    setTitle("");
  };

  return (
    <Layout toggleSearch={toggleSearch} handleToggleSearch={handleToggleSearch} title={title} setQueryTitle={setQueryTitle} setTitle={setTitle}>
      {/* ##### Top Catagory Area Start ##### */}
      <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <div className="row">
            <MediumRecipeCard
              title={firstRecipe?.name ?? "--"}
              description={firstRecipe?.servings ?? "--"}
              id={firstRecipe?.id}
            />
            <MediumRecipeCard
              title={secondRecipe?.name ?? "--"}
              description={secondRecipe?.servings ?? "--"}
              id={firstRecipe?.id}
            />
          </div>
        </div>
      </section>
      {/* ##### Top Catagory Area End ##### */}
      {/* ##### Best Receipe Area Start ##### */}
      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Recipes</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {firstSixRecipes &&
              firstSixRecipes?.map((data) => {
                return (
                  <SmallRecipeCard
                    name={data?.name ?? "--"}
                    img="/img/bg-img/r1.jpg"
                    key={data?.id}
                    id={data?.id}
                  />
                );
              })}
          </div>
        </div>
      </section>
      {/* ##### Best Receipe Area End ##### */}
      {/* ##### CTA Area Start ##### */}
      <section
        className="cta-area bg-img bg-overlay"
        style={{ backgroundImage: "url(/img/bg-img/bg4.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              {/* Cta Content */}
              <div className="cta-content text-center">
                <h2>All Recipes</h2>
                <p>
                  Irrestible food recipes that would leave you craving for more
                </p>
                <a href="/recipe" className="btn delicious-btn">
                  Discover all the recipes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### CTA Area End ##### */}
      {/* ##### Small Receipe Area Start ##### */}
      <section className="small-receipe-area section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* Small Receipe Area */}
            {otherRecipes &&
              otherRecipes.map((data) => (
                <SmallestCard
                  createdAt="January 04, 2018"
                  name={data.name}
                  id={data?.id}
                  key={data?.id}
                />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
