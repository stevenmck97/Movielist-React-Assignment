import React, { useContext } from "react";
import PageTemplate from '../components/templatePersonListPage'
import {PeopleContext} from '../contexts/peopleContext'
import AddToFavoritesButton from '../components/buttons/addToFavoritesPeople'

const PersonListPage = () => {
  const context = useContext(PeopleContext);
  const popular = context.popular.filter((p) => {  // New
    return !("favorite" in p);
  });

  return (
    <PageTemplate
      name="Popular Actors"
      popular={popular}  /* Changed */
      action={(person) => {
        return <AddToFavoritesButton person={person} />;
      }}
    />
  );
};

export default PersonListPage;