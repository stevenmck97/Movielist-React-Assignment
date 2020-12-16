import React, { useContext } from "react";
import PageTemplate from '../components/templateTvListPage'
import {TvShowsContext} from '../contexts/tvShowsContext'
import AddToWatchList from '../components/buttons/addToWatchListTv'

const TopRatedTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const topRated = context.topRated.filter((t) => {  // New
    return !("watchList" in t);
  });

  return (
    <PageTemplate
      name="Top Rated Tv Shows"
      tvShows={topRated}  /* Changed */
      action={(tv) => {
        return <AddToWatchList tv={tv} />;
      }}
    />
  );
};


export default TopRatedTvShowsPage;