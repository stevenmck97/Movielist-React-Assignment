import React, {useContext} from "react";
import PersonListPageTemplate from "../components/templatePersonListPage";
import {PeopleContext} from '../contexts/peopleContext'
import AddToFavoriteButton from '../components/buttons/addToFavoritesPeople'

const FavoritePeoplePage = props => {
  const context = useContext(PeopleContext);
  const favorites = context.popular.filter( p => p.favorite )
  return (
    <PersonListPageTemplate
      popular={favorites}
      name={"Favorite Actors"}
      action={person => <AddToFavoriteButton person={person} />}
    />
  );
};

export default FavoritePeoplePage;