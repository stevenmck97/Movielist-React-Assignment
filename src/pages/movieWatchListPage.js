import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const MovieWatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.movies.filter( m => m.watchList )
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Movies Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default MovieWatchListPage;