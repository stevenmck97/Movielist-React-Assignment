import React from "react";
import "./personDetails.css";

export default ({ person }) => {
    return (
        <>
            <h4>Biography</h4>
            <p>{person.biography}</p>
            <ul className="list-group list-group-horizontal">
                <li key="ruh" className="list-group-item list-group-item-dark">
                    Name
        </li>
                <li key="rut" className="list-group-item ">
                    {person.name}
                </li>
                <li key="rdh" className="list-group-item list-group-item-dark">
                    Birthday
        </li>
                <li key="rdv" className="list-group-item ">
                    {person.birthday}
                </li>
                <li key="rdh" className="list-group-item list-group-item-dark">
                    Gender
        </li>
                <li key="rdv" className="list-group-item ">
                    {person.gender}
                </li>
                <li key="rdh" className="list-group-item list-group-item-dark">
                    Place of Birth
        </li>
                <li key="rdv" className="list-group-item ">
                    {person.place_of_birth}
                </li>
            </ul>

            <ul className="list-group list-group-horizontal">
                <li key="gh" className="list-group-item list-group-item-dark">
                    Also Known as
        </li>
                {person.also_known_as.map(g => (
                    <li key={g.name} className="list-group-item">
                        {g.name}
                    </li>
                ))}
            </ul>
        </>
    );
};