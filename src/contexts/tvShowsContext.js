import React, { useEffect, createContext, useReducer } from "react";
import { getTvShows, getLatestTvShows} from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favoriteTvShow":
      return {
        tvShows: state.tvShows.map((t) =>
          t.id === action.payload.tv.id ? { ...t, favorite: true } : t
        ),
        latest: [...state.latest],
      };
    case "add-watchList":
      return {
        latest: state.latest.map((t) =>
          t.id === action.payload.tv.id ? { ...t, watchList: true } : t
        ),
        tvShows: [...state.latest],
      };
    case "load":
      return { tvShows: action.payload.tvShows, latest: [...state.latest] };
    case "load-latest":
      return { latest: action.payload.tvShows, tvShows: [...state.tvShows] };
    case "add-review":
      return {
        tvShows: state.tvShows.map((t) =>
          t.id === action.payload.tv.id
            ? { ...t, review: action.payload.review }
            : t
        ),
        latest: [...state.latest],
      };
    default:
      return state;
  }
};

const TvShowsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], latest: [] });

  const addToFavorites = (tvShowId) => {
    const index = state.tvShows.map((t) => t.id).indexOf(tvShowId);
    dispatch({ type: "add-favorite", payload: { tv: state.tvShows[index] } });
  };

  const addToWatchList = (tvShowId) => {
    const index = state.latest.map((t) => t.id).indexOf(tvShowId);
    dispatch({ type: "add-watchList", payload: { tv: state.latest[index] } });
  };

  const addReview = (tv, review) => {
    dispatch({ type: "add-review", payload: { tv, review } });
  };

  useEffect(() => {
    getTvShows().then((tvShows) => {
      dispatch({ type: "load", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestTvShows().then((tvShows) => {
      dispatch({ type: "load-upcoming", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: state.tvShows,
        latest: state.latest,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;