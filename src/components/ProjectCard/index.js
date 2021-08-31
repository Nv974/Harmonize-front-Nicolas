import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import cardPicture from "../../assets/img/cards/project.jpeg";

import "./card.scss";

const ProjectCard = ({
  name,
  user,
  picture,
  description,
  music_genre,
  username,
  audio_url,
  playThisSong,
  setGenreFilter,
  slug,
  checkFilter,
}) => {
  const handleGenreClick = (event) => {
    const genreValue = event.target.value;
    setGenreFilter(genreValue);
    checkFilter();
  };
  const userToDisplay = user ? user.username : username;
  const userLink = user ? "/Artistes/" + user.slug : "/Artistes/" + slug;

  const projectPicture = picture
    ? "http://ec2-3-84-168-178.compute-1.amazonaws.com/images/projects/" +
      picture
    : cardPicture;

  return (
    <div className="card__project">
      <div className="box-project">
        <Link exact to={"/Projets/" + slug}>
          <img
            className="card__project__img card__project_artist"
            src={projectPicture}
            alt={` projet ${userToDisplay}`}
          />
        </Link>
      </div>
      <h3 className="card__title">{name}</h3>
      <Link exact to={userLink} className="card__author">
        {" "}
        Par : {userToDisplay}{" "}
      </Link>
      <p className="card__description">
        {description.length > 60
          ? description.slice(0, 60) + "..."
          : description}{" "}
      </p>

      <button
        className="card__button__play"
        onClick={() =>
          playThisSong("projects/" + audio_url, userToDisplay, name)
        }
      >
        <FontAwesomeIcon icon={faPlayCircle} size="2x" />
      </button>
      <Link exact to={"/Projets"}>
        <button
          className="card__button__tag"
          value={music_genre.name}
          onClick={handleGenreClick}
        >
          {" "}
          {music_genre.name}
        </button>
      </Link>

      <Link className="card__link" exact to={"/Projets/" + slug}>
        Voir le projet
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  picture: PropTypes.string,
  description: PropTypes.string.isRequired,
  loadProject: PropTypes.func.isRequired,
  username: PropTypes.string,
};

ProjectCard.defaultProps = {
  picture: "" /* TODO : Mettre une image par défaut */,
  username: null,
};

export default ProjectCard;
