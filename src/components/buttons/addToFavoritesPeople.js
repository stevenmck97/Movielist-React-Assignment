import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToFavoriteButton = ({ person }) => {
  const context = useContext(PeopleContext);
  
  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(person.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;