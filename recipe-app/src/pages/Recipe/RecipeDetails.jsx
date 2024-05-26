import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getComments, getRecipeById } from "../../../service/recipe";
import Ratings from "../../components/Ratings";
import { FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { addComment } from "../../../service/recipe";
import toast from "react-hot-toast";

const RecipeDetails = () => {
  const param = useParams();
  const id = param?.id;
  const query = useQuery(["recipes", id], () => getRecipeById(id));
  const getAllComments = useQuery(["comments"], getComments);
  const allCommentsData = getAllComments?.data?.data?.allComments;

  const recipe = query?.data?.data?.recipe;
  let ingredients = recipe?.ingredients?.split("|");
  let instructions = recipe?.instructions?.split(".");

  const queryClient = useQueryClient();
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("comments");
    },
  });

  const recipeSchema = object({
    comment: string().required().label("Leave a comment"),
  });

  const token = localStorage.getItem("token");
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const form = useFormik({
    initialValues: {
      comment: "",
    },
    validateOnMount: false,
    enableReinitialize: true,
    validationSchema: recipeSchema,
    onSubmit: (values) => {
      // console.log(values, "values");
      try {
        mutation.mutate({
          comment: values.comment,
          userId: userDetails?._id,
          recipeId: recipe?.id,
        });
        toast.success("Comment added successfully!");
        form.resetForm();
        // navigate("/recipe");
      } catch (error) {
        toast.error("An error occur!");
      }
    },
  });
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
                <h2>{recipe?.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      <div className="receipe-post-area section-padding-30">
        {/* Receipe Post Search */}
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="receipe-headline my-5">
                  <span>April 05, 2018</span>
                  <h2>{recipe?.name}</h2>
                  <div className="receipe-duration">
                    <h6>Prep: 15 mins</h6>
                    <h6>Cook: 30 mins</h6>
                    <h6>Yields: {recipe?.servings}</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="receipe-ratings my-4 mb-5">
                  <h4>Instructions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8">
                {/* Single Preparation Step */}
                <div className="single-preparation-step d-flex">
                  <ul>
                    {instructions?.map((instruction, index) => (
                      <li key={`${index}+0001`}>
                        <label className="">{instruction}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Ingredients */}
              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  {/* Custom Checkbox */}
                  <ul>
                    {ingredients?.map((ingredient, index) => (
                      <li key={`${index}+0001`}>
                        <label className="">{ingredient}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {token !== "undefined" && token && (
              <>
                <div className="row">
                  <div className="col-12">
                    <button className="section-heading text-left">
                      <h3>Leave a comment</h3>
                    </button>
                  </div>
                </div>
                <FormikProvider value={form}>
                  <div className="row">
                    <div className="col-12 mb-50">
                      <div className="contact-form-area">
                        <form onSubmit={form.handleSubmit}>
                          <div className="row">
                            <div className="col-12">
                              <textarea
                                name="comment"
                                className="form-control"
                                id="comment"
                                cols={30}
                                rows={10}
                                placeholder="Leave a Comment"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values["comment"]}
                              />
                            </div>
                            <div className="col-12">
                              <button
                                className="btn delicious-btn mt-30"
                                type="submit"
                              >
                                Post Comments
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </FormikProvider>
              </>
            )}
            <div className="mb-50">
              <Link to="/signup" className="signup-text">
                Sign up
              </Link>{" "}
              or{" "}
              <Link to="/login" className="signup-text">
                login
              </Link>{" "}
              to leave a comment
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Comments</h4>
                  <ul>
                    {allCommentsData?.map((comment, index) => (
                      <li key={`${index}+0001`} className="comment-li">
                        <label className="">{comment.comment}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;
