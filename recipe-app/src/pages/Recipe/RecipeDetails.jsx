import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteComment,
  getCommentsByRecipeId,
  getRecipeById,
  updateComment,
} from "../../../service/recipe";
import Ratings from "../../components/Ratings";
import { FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { addComment } from "../../../service/recipe";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import MyVerticallyCenteredModal from "../../components/Modal";

const RecipeDetails = () => {
  const param = useParams();
  const id = param?.id;

  const query = useQuery(["recipes", id], () => getRecipeById(id));
  const recipe = query?.data?.data?.recipe;

  // console.log(recipe, "recipe");
  const getAllComments = useQuery(["comments", id], () =>
    getCommentsByRecipeId(id)
  );
  const allCommentsData = getAllComments?.data?.data?.comments;
  // console.log(allCommentsData, "comments");

  let ingredients = recipe?.ingredients?.split(/[|,;:]/);
  let instructions = recipe?.instructions?.split(".");

  const queryClient = useQueryClient();
  const addMutation = useMutation(addComment, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("comments");
      toast.success("Comment added successfully!");
      form.resetForm()
    },
  });

  // To update existing recipe
  const updateMutation = useMutation(
    ({ id, data }) => updateComment(id, data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("comments");
        // navigate("/recipe");
        // console.log(data, 'updated data')
        toast.success("Comment updated successfully!");
      },
    }
  );

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const userDetails = user ? JSON.parse(user) : "";

  const findUser = (id) => userDetails._id === id;
  // console.log(findUser, "find user");

  const role = userDetails?.role;

  //Find comment using comment id
  const [comment, setComment] = useState();
  const findComment = (id) => {
    const comment = allCommentsData.find((_comment) => _comment.id === id);
    setComment(comment);
    console.log(comment, "comment");
    return comment;
  };
  console.log(comment, "outer comment");

  const recipeSchema = object({
    comment: string().required().label("Leave a comment"),
  });

  const form = useFormik({
    initialValues: {
      comment: "" || comment?.comment,
    },
    validateOnMount: false,
    enableReinitialize: true,
    validationSchema: recipeSchema,
    onSubmit: (values) => {
      // console.log(values, "values");
      try {
        if (comment?.comment) {
          // Update existing recipe, passing id and data separately
          updateMutation.mutate({
            id: comment?.id,
            data: { comment: values.comment },
          });
        } else {
          // Add new recipe
          addMutation.mutate({
            comment: values.comment,
            userId: userDetails?._id,
            recipeId: recipe?.id,
          });
        }
        // navigate("/recipe");
      } catch (error) {
        toast.error("An error occur!");
      }
    },
  });

  const date = dayjs(recipe?.createdAt).format("MMMM DD, YYYY");

  //Hide Edit and delete buttons on mouse leave
  const commentRefs = useRef([]);
  const handleMouseHover = (index) => {
    if (commentRefs.current[index]) {
      commentRefs.current[index].style.visibility = "visible";
    }
  };
  const handleMouseLeave = (index) => {
    if (commentRefs.current[index]) {
      commentRefs.current[index].style.visibility = "hidden";
    }
  };

  //Delete comment
  const [modalShow, setModalShow] = useState(false);

  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      // Refetch the recipes after a deletion
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries("comments");
      setModalShow(false);
    },
    onError: (error) => {
      toast.error("An error occurred while deleting the comment.");
      console.error(error);
    },
  });

  // Handle delete button click
  const handleDelete = () => {
    mutation.mutate(comment?.id);
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
                  <span>{date}</span>
                  <h2>{recipe?.name}</h2>
                  <div className="receipe-duration">
                    <h6>
                      Prep:{" "}
                      {recipe?.prepTime ? recipe?.prepTime : "Not Specified"}
                    </h6>
                    <h6>
                      Cook:{" "}
                      {recipe?.cookTime ? recipe?.cookTime : "Not Specified"}
                    </h6>
                    <h6>Yields: {recipe?.servings}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="receipe-ratings mb-4">
                  <h4>Instructions</h4>
                </div>
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

            <div className="row">
              <div className="col-12">
                <button className="section-heading text-left">
                  <h3>Leave a comment</h3>
                </button>
              </div>
            </div>
            {token !== "undefined" && token && (
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
            )}
            {!token && (
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
            )}
            <div className="row">
              <div className="col-12">
                <div className="ingredients">
                  <h4>Comments</h4>
                  {allCommentsData?.length === 0 && (
                    <p>Be the first to comment on this recipe!</p>
                  )}
                  <ul>
                    {allCommentsData?.map((comment, index) => (
                      <div
                        className="comment-li"
                        onMouseEnter={() => handleMouseHover(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        key={`${index}+0001`}
                      >
                        <li className="">
                          <label className="">{comment.comment}</label>
                        </li>

                        <div
                          className=""
                          style={{ cursor: "pointer", visibility: "hidden" }}
                          ref={(el) => (commentRefs.current[index] = el)}
                        >
                          {findUser(comment.userId) && (
                            <>
                              <span
                                className="pr-4"
                                onClick={() => findComment(comment.id)}
                              >
                                <img
                                  src="/icons/edit-icon.svg"
                                  alt=""
                                  style={{ width: "20px" }}
                                />
                              </span>
                              <span
                                className=""
                                onClick={() => {
                                  console.log(comment.id, "comment id");
                                  setModalShow(true);
                                  findComment(comment.id);
                                }}
                              >
                                <img
                                  src="/icons/delete-icon.svg"
                                  alt=""
                                  style={{ width: "15px" }}
                                />
                              </span>
                            </>
                          )}
                          {findUser(comment.userId) ||
                            (role === "admin" && (
                              <span
                                className=""
                                onClick={() => {
                                  console.log(comment.id, "comment id");
                                  setModalShow(true);
                                  findComment(comment.id);
                                }}
                              >
                                <img
                                  src="/icons/delete-icon.svg"
                                  alt=""
                                  style={{ width: "15px" }}
                                />
                              </span>
                            ))}
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        hide={() => setModalShow(false)}
        title="Delete Comment"
        text="Are you sure you want to delete this comment?"
        onClick={handleDelete}
      />
    </Layout>
  );
};

export default RecipeDetails;
