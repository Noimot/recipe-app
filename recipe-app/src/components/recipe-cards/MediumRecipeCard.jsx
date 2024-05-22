import React from "react";

const MediumRecipeCard = ({title, description, id}) => {
  return (
    <div className="col-12 col-lg-6">
      <div className="single-top-catagory">
        <img src="/img/bg-img/bg2.jpg" alt="" />
        {/* Content */}
        <div className="top-cta-content">
          <h3>{title}</h3>
          <h6>{description}</h6>
          <a href={`/recipe/${id}`} className="btn delicious-btn">
            See Full Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediumRecipeCard;
