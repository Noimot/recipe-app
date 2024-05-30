import React, { useState } from "react";
import Layout from "../../components/Layout";
import SmallestCard from "../../components/recipe-cards/SmallestCard";
import { useQuery, useQueryClient } from "react-query";
import { getAllRecipes, searchRecipes } from "../../../service/recipe";

const Recipe = ({title, setTitle}) => {
//   const [title, setTitle] = useState("");
  const [queryTitle, setQueryTitle] = useState("");
  //   const query = useQuery("recipes", getAllRecipes);
  //   const allRecipes = query?.data?.data?.allRecipes;

  const query = useQuery(["recipes", queryTitle], () =>
    searchRecipes(queryTitle)
  );
  const allRecipes = query?.data?.data?.recipes;
  console.log(query);
  const handleSearch = () => {
    setQueryTitle(title);
  };
  const handleReset = () => {
    setQueryTitle("");
    setTitle("");
  };
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
            <form>
              <div className="row">
                <div className="d-flex">
                  <div className="col-lg-12">
                    <input
                      name="search"
                      placeholder="Search Recipes"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="text-right">
                    <button
                      type="button"
                      className="btn delicious-btn"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                  <div className="text-right">
                    <button
                      type="button"
                      className="btn delicious-btn"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>
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
              {query.isLoading && <div>page is loading.....</div>}
              {allRecipes &&
                allRecipes?.map((data) => (
                  <>
                    <SmallestCard
                      createdAt={data.createdAt}
                      name={data.name}
                      id={data?.id}
                      key={data.id}
                      photo={data?.photo}
                    />
                    {/* <span>
                      <img src="/icons/delete-icon.svg" alt="" />
                    </span> */}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
