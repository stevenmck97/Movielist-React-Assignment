import React from "react";
import Tv from "../tvCard/";
import "./tvList.css";

const TvList = ({tvShows, action}) => {
  const tvCards = tvShows.map(t => (
    <Tv key={t.id} tv={t} action={action} />
  ));
  return <div className="row tv bg-info">{tvCards}</div>;
};

export default TvList;