import React, { useEffect, createContext, useReducer } from "react";
import { getPopularPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        popular: state.popular.map((p) =>
          p.id === action.payload.person.id ? { ...p, favorite: true } : p
        ),
    };
    case "load":
      return { popular: action.payload.popular };
    
    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { popular: []});

  const addToFavorites = (personId) => {
    const index = state.popular.map((p) => p.id).indexOf(personId);
    dispatch({ type: "add-favorite", payload: { person: state.popular[index] } });
  };

  useEffect(() => {
    getPopularPeople().then((popular) => {
      dispatch({ type: "load", payload: { popular } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PeopleContext.Provider
      value={{
        popular: state.popular,
        addToFavorites: addToFavorites,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;