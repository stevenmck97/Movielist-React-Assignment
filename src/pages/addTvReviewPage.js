import React from "react";
import PageTemplate from "../components/templateTvPage";
import ReviewForm from '../components/tvReviewForm'

const ReviewFormPage = props => {

  return (
      <PageTemplate tv={props.location.state.tv}>
          <ReviewForm tv={props.location.state.tv} />
      </PageTemplate>
  );
};
export default ReviewFormPage;