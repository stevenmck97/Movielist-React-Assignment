import React, { useState } from "react";
import Header from "../headerPersonList";
import PersonList from "../personList";
import FilterControls from "../filterControls";

const PersonListPageTemplate = ({ popular, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedPeople = popular
    .filter(p => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header name={name} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numPeople={displayedPeople.length} />
      <PersonList
        action={action}
        popular={displayedPeople}
      ></PersonList>
    </>
  );
};

export default PersonListPageTemplate;