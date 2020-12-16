import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import TvReviews from "../components/tvReviews";
import useTv from "../hooks/useTv";

const TvPage = props => {
    const { id } = props.match.params;
    const [tv] = useTv(id)  // NEW
    return (
        <>
            {tv ? (
                <>
                    <PageTemplate tv={tv}>
                        <TvDetails tv={tv} />
                    </PageTemplate>
                    <div className="row">
                        <div className="col-12 ">
                            {!props.history.location.pathname.endsWith("/reviews") ? (
                                <Link
                                    className="btn btn-primary btn-block active"
                                    to={`/tvShows/${id}/reviews`}
                                >
                                    Show Reviews (Extracts)
                                </Link>
                            ) : (
                                    <Link
                                        className="btn btn-primary btn-block active"
                                        to={`/tvShows/${id}`}
                                    >
                                        Hide Reviews
                                    </Link>
                                )}
                        </div>
                    </div>
                    <Route
                        path={`/tvShows/:id/reviews`}
                        render={props => <TvReviews tv={tv} {...props} />}
                    />
                </>
            ) : (
                    <p>Waiting for movie details</p>
                )}
        </>
    );
};

export default withRouter(TvPage);