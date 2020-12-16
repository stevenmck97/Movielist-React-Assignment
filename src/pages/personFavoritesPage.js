import React, {useContext} from "react";
import PersonListPageTemplate from "../components/templatePersonListPage";
import {PeopleContext} from '../contexts/peopleContext'

const FavoritePeoplePage = props => {
  const context = useContext(PeopleContext);
  const favorites = context.popular.filter( t => t.favorite )
  return (
    <PersonListPageTemplate
      popular={favorites}
      name={"Favorite Actors"}
    />
  );
};

export default FavoritePeoplePage;