// import React, { useEffect, createContext, useReducer } from "react";
// import { getTvShows, getAiringTvShows} from "../api/tmdb-api";

// export const TvShowsContext = createContext(null);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-favorite":
//       return {
//         tvShows: state.tvShows.map((t) =>
//           t.id === action.payload.tv.id ? { ...t, favorite: true } : t
//         ),
//         airing: [...state.airing],
//       };
//     case "add-watchList":
// return {
//     airing: state.airing.map((t) =>
//         t.id === action.payload.tv.id ? { ...t, watchList: true } : t
//     ),
//     tvShows: [...state.airing],
// };

//     case "load":
//       return { tvShows: action.payload.tvShows, airing: [...state.airing] };
//     case "load-airing":
//       return { airing: action.payload.tvShows, tvShows: [...state.tvShows] };
//     case "add-review":
//       return {
//         tvShows: state.tvShows.map((t) =>
//           t.id === action.payload.tv.id
//             ? { ...t, review: action.payload.review }
//             : t
//         ),
//         airing: [...state.airing],
//       };
//     default:
//       return state;
//   }
// };

// const TvShowsContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, { tvShows: [], airing: [] });

//   const addToFavorites = (tvShowId) => {
//     const index = state.tvShows.map((t) => t.id).indexOf(tvShowId);
//     dispatch({ type: "add-favorite", payload: { tv: state.tvShows[index] } });
//   };

//   const addToWatchList = (tvShowId) => {
//     const index = state.airing.map((t) => t.id).indexOf(tvShowId);
//     dispatch({ type: "add-watchList", payload: { tv: state.airing[index] } });
//   };

//   const addReview = (tv, review) => {
//     dispatch({ type: "add-review", payload: { tv, review } });
//   };

//   useEffect(() => {
//     getTvShows().then((tvShows) => {
//       dispatch({ type: "load", payload: { tvShows } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     getAiringTvShows().then((tvShows) => {
//       dispatch({ type: "load-airing", payload: { tvShows } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <TvShowsContext.Provider
//       value={{
//         tvShows: state.tvShows,
//         airing: state.airing,
//         addToFavorites: addToFavorites,
//         addReview: addReview,
//         addToWatchList: addToWatchList,
//       }}
//     >
//       {props.children}
//     </TvShowsContext.Provider>
//   );
// };

// export default TvShowsContextProvider;

import React, { useEffect, createContext, useReducer } from "react";
import { getTvShows, getAiringTvShows, getTopRatedTvShows } from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "add-favorite":
            return {
                tvShows: state.tvShows.map((t) =>
                    t.id === action.payload.tv.id ? { ...t, favorite: true } : t
                ),
                airing: [...state.airing],
                topRated: [...state.topRated],
            };
        case "add-watchList":
            return {
                airing: state.airing.map((t) =>
                    t.id === action.payload.tv.id ? { ...t, watchList: true } : t
                ),
                tvShows: [...state.airing],
            };
        case "add-watchListTopRated":
            return {
                topRated: state.topRated.map((t) =>
                    t.id === action.payload.tv.id ? { ...t, watchList: true } : t
                ),
                tvShows: [...state.topRated],
            };

        case "load":
            return { tvShows: action.payload.tvShows, airing: [...state.airing], topRated: [...state.topRated] };
        case "load-topRated":
            return { topRated: action.payload.tvShows, tvShows: [...state.tvShows], airing: [...state.airing] };
        case "load-airing":
            return { airing: action.payload.tvShows, tvShows: [...state.tvShows], topRated: [...state.topRated] };
        case "add-review":
            return {
                tvShows: state.tvShows.map((t) =>
                    t.id === action.payload.tv.id
                        ? { ...t, review: action.payload.review }
                        : t
                ),
                airing: [...state.airing],
                topRated: [...state.topRated],
            };
        default:
            return state;
    }
};

const TvShowsContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { tvShows: [], airing: [], topRated: [] });

    const addToFavorites = (tvShowId) => {
        const index = state.tvShows.map((t) => t.id).indexOf(tvShowId);
        dispatch({ type: "add-favorite", payload: { tv: state.tvShows[index] } });
    };

    const addToWatchList = (tvShowId) => {
        const index = state.airing.map((t) => t.id).indexOf(tvShowId);
        dispatch({ type: "add-watchList", payload: { tv: state.airing[index] } });
    
    };

    // const addToWatchListTopRated = (tvShowId) => {
    //     const index = state.topRated.map((t) => t.id).indexOf(tvShowId);
    //     dispatch({ type: "add-watchList", payload: { tv: state.topRated[index] } });
    // };

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
        getAiringTvShows().then((tvShows) => {
            dispatch({ type: "load-airing", payload: { tvShows } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getTopRatedTvShows().then((tvShows) => {
            dispatch({ type: "load-topRated", payload: { tvShows } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TvShowsContext.Provider
            value={{
                tvShows: state.tvShows,
                airing: state.airing,
                topRated: state.topRated,
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