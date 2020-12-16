import React, { useContext } from "react";
import PageTemplate from '../components/templateTvListPage'
import {TvShowsContext} from '../contexts/tvShowsContext'
import AddToWatchList from '../components/buttons/addToWatchListTv'

const AiringTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const airing = context.airing.filter((t) => {  // New
    return !("watchList" in t);
  });

  return (
    <PageTemplate
      name="Airing Tv Shows"
      tvShows={airing}  /* Changed */
      action={(tv) => {
        return <AddToWatchList tv={tv} />;
      }}
    />
  );
};


export default AiringTvShowsPage;