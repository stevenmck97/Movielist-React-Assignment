import React, {useContext} from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import AddReviewButton from '../components/buttons/addTvReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const FavoriteTvShowsPage = props => {
  const context = useContext(TvShowsContext);
  const favorites = context.tvShows.filter( t => t.favorite )
  return (
    <TvListPageTemplate
      tvShows={favorites}
      name={"Favorite Tv Shows"}
      action={tv => <AddReviewButton tv={tv} />}
    />
  );
};

export default FavoriteTvShowsPage;