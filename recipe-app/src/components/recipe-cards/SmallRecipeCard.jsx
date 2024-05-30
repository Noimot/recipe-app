import React from "react";
import Ratings from "../Ratings";
import { Link } from "react-router-dom";

const SmallRecipeCard = ({ name, id, photo }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-best-receipe-area mb-30">
        <div className="receipe-content">
          <Link to={`recipe/${id}`}>
            <img src={photo ? photo : "/img/bg-img/r1.jpg"} alt="" style={{cursor: "pointer"}} />
            <h5 className="mt-2">{name}</h5>
          </Link>
          <Ratings />
        </div>
      </div>
    </div>
  );
};

export default SmallRecipeCard;
