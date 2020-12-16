import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = ({ tv }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/tvReviews/form`,
        state: {
          tv: tv
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;