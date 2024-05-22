import React from "react";
import Ratings from "../Ratings";

const SmallRecipeCard = ({name, img, id}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-best-receipe-area mb-30">
        <img src={img} alt="" />
        <div className="receipe-content">
          <a href={`recipe/${id}`}>
            <h5>{name}</h5>
          </a>
          <Ratings />
        </div>
      </div>
    </div>
  );
};

export default SmallRecipeCard;
