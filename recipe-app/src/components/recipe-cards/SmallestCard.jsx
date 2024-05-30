import React, { useState } from "react";
import Ratings from "../Ratings";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import MyVerticallyCenteredModal from "../Modal";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteRecipe, getCommentsByRecipeId } from "../../../service/recipe";
import toast from "react-hot-toast";

const SmallestCard = ({ createdAt, name, id }) => {
  const [modalShow, setModalShow] = useState(false);
  const queryClient = useQueryClient();

  const getAllComments = useQuery(["comments", id], () =>
    getCommentsByRecipeId(id)
  );
  const allCommentsData = getAllComments?.data?.data?.comments;
  const commentsLength = allCommentsData?.length;

  const user = localStorage?.getItem("user");
  const userData = user ? JSON.parse(user) : "";

  const navigate = useNavigate();
  const goToEditRecipe = () => {
    navigate(`/recipe/add-recipe?id=${id}`);
  };
  const date = dayjs(createdAt).format("MMMM DD, YYYY");

  //Delete Recipe
  const mutation = useMutation(deleteRecipe, {
    onSuccess: () => {
      // Refetch the recipes after a deletion
      toast.success("Recipe deleted successfully!");
      queryClient.invalidateQueries("recipes");
    },
    onError: (error) => {
      toast.error("An error occurred while deleting the recipe.");
      console.error(error);
    },
  });

  // Handle delete button click
  const handleDelete = () => {
    mutation.mutate(id);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-50">
      <div className="single-small-receipe-area d-flex">
        <div className="receipe-thumb">
          <img src="/img/bg-img/sr1.jpg" alt="" />
        </div>
        <div className="receipe-content">
          <span>{date}</span>
          <Link to={`/recipe/${id}`}>
            <h5>{name}</h5>
          </Link>
          <Ratings />
          <p>
            {commentsLength < 1
              ? "No comment yet"
              : commentsLength + " Comment"}
            {commentsLength > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      {userData.role === "admin" && (
        <div className="mt-2" style={{ cursor: "pointer" }}>
          <span className="" onClick={goToEditRecipe}>
            <img src="/icons/edit-icon.svg" alt="" style={{ width: "17px" }} />
          </span>
          <span className="pl-4" onClick={() => setModalShow(true)}>
            <img
              src="/icons/delete-icon.svg"
              alt=""
              style={{ width: "15px" }}
            />
          </span>
        </div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        hide={() => setModalShow(false)}
        title="Delete Recipe"
        text="Are you sure you want to delete this recipe?"
        onClick={handleDelete}
      />
    </div>
  );
};

export default SmallestCard;
