import React from "react";
import PageTemplate from '../components/templateTvPage'
import TvReview from "../components/tvReview";

const TvReviewPage = (props) => {
    return (
        <PageTemplate tv={props.location.state.tv}>
            <TvReview review={props.location.state.review} />
        </PageTemplate>
    );
};

export default TvReviewPage;