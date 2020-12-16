import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const AddToWatchList = ({ tv }) => {
  const context = useContext(TvShowsContext);
  
  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(tv.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchList;