import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({popular, action}) => {
  const personCards = popular.map(p => (
    <Person key={p.id} person={p} action={action} />
  ));
  return <div className="row people bg-info">{personCards}</div>;
};

export default PersonList;