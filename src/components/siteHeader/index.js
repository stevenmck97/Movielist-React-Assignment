import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";


const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">

          <Dropdown className="btn-header">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Movies
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/">Discover Movies </Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/upcoming">Upcoming Movies </Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/favorites">Favorite Movies </Dropdown.Item>
              <Dropdown.Item as={Link} to="/movies/watchList">Watchlist Movies </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="btn-header">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic2">
              TV Shows
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/tv/discover">Discover TV Shows </Dropdown.Item>
              <Dropdown.Item as={Link} to="/tv/airing">Airing TV Shows </Dropdown.Item>
              <Dropdown.Item as={Link} to="/tv/topRated">Top Rated TV Shows </Dropdown.Item>
              <Dropdown.Item as={Link} to="/tv/favorites">Favorite TV Shows </Dropdown.Item>
              <Dropdown.Item as={Link} to="/tv/watchList">Watchlist TV Shows </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="btn-header">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic3">
              Actors
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/person/popular">Popular Actors </Dropdown.Item>
              <Dropdown.Item as={Link} to="/person/favorites">Favorite Actors </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;