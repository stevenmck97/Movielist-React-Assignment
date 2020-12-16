import React, { useContext } from "react";
import PageTemplate from '../components/templateTvListPage'
import {TvShowsContext} from '../contexts/tvShowsContext'
import AddToFavoritesButton from '../components/buttons/addToFavouritesTv'

const TvListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows.filter((t) => {  // New
    return !("favorite" in t);
  });

  return (
    <PageTemplate
      name="Discover Tv Shows"
      tvShows={tvShows}  /* Changed */
      action={(tv) => {
        return <AddToFavoritesButton tv={tv} />;
      }}
    />
  );
};

export default TvListPage;