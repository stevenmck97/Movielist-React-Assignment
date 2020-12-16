import React, { useState, useEffect, createContext } from "react";
import { getTvGenres } from "../api/tmdb-api";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    const [genres, setTvGenres] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
      getTvGenres().then(allGenres => {
        setTvGenres([genres[0], ...allGenres]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GenresContext.Provider
          value={{
            genres
          }}
        >
          {props.children}
        </GenresContext.Provider>    
    )
}

export default GenresContextProvider;