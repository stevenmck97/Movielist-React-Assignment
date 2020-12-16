import React, { useState } from "react";
import Header from "../headerTvList";
import TvList from "../tvList";
import FilterControls from "../tvFilterControls";

const TvListPageTemplate = ({ tvShows, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedTvShows = tvShows
    .filter(t => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(t => {
      return genre > 0
        ? t.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header name={name} numTvShows={displayedTvShows.length} />
      <FilterControls onUserInput={handleChange} numTvShows={displayedTvShows.length} />
      <TvList
        action={action}
        tvShows={displayedTvShows}
      ></TvList>
    </>
  );
};

export default TvListPageTemplate;