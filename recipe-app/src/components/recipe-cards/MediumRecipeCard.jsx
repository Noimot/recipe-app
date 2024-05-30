import React from "react";
import { Link } from "react-router-dom";

const MediumRecipeCard = ({ title, description, id, photo }) => {
  return (
    <div className="col-12 col-lg-6">
      <div className="single-top-catagory">
        <img src={photo ? photo : "/img/bg-img/bg2.jpg"} alt="" />
        {/* Content */}
        <div className="top-cta-content">
          <h3>{title}</h3>
          <h6>{description}</h6>
          <Link to={`/recipe/${id}`} className="btn delicious-btn">
            See Full Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediumRecipeCard;
