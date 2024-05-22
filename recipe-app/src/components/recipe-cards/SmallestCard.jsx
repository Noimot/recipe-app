import React from "react";
import Ratings from "../Ratings";

const SmallestCard = ({createdAt, name, id}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-small-receipe-area d-flex">
        <div className="receipe-thumb">
          <img src="/img/bg-img/sr1.jpg" alt="" />
        </div>
        <div className="receipe-content">
          <span>{createdAt}</span>
          <a href={`/recipe/${id}`}>
            <h5>{name}</h5>
          </a>
          <Ratings />
          <p>2 Comments</p>
        </div>
      </div>
    </div>
  );
};

export default SmallestCard;
