import React, {useContext} from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import AddReviewButton from '../components/buttons/addTvReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const TvWatchListPage = props => {
  const context = useContext(TvShowsContext);
  const watchList = context.tvShows.filter( t => t.watchList )
  return (
    <TvListPageTemplate
      tvShows={watchList}
      name={"Tv Show Watch List"}
      action={tv => <AddReviewButton tv={tv} />}
    />
  );
};

export default TvWatchListPage;