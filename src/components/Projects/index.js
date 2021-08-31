import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//le composant doit afficher la liste de touts les projets
import "./projects.scss";
import ProjectCard from "../../containers/ProjectCard";
import Loading from "../Loading";

const Projects = ({
  projectsList,
  loadProjectsFromAPI,
  projectsIsLoading,
  projectsOrder,
  setProjectsOrder,
  setLoading,
  setGenreFilter,
  genreSelected,
  genreList,
}) => {
  const handleSelectOrder = (event) => {
    const order = event.target.value;
    setLoading(true, "projects");
    setProjectsOrder(order);
  };

  const handleSelectMusic = (event) => {
    const genreValue = event.target.value;
    setGenreFilter(genreValue);
  };

  useEffect(() => {
    loadProjectsFromAPI();
  }, [projectsOrder]);

  const [listByGenre, setListByGenre] = useState();

  useEffect(() => {
    if (genreSelected !== "null") {
      setListByGenre(
        projectsList.filter(
          (project) => project.music_genre.name === genreSelected
        )
      );
    } else {
      setListByGenre(projectsList);
    }
  }, [genreSelected, projectsOrder]);

  const listTodisplay = genreSelected === "null" ? projectsList : listByGenre;

  return (
    <div className="projects">
      <div className="projects__header">
        <h2 className="projects__header__title">Les projets</h2>
      </div>
      <div className="projects__filters__genre__title"> Filtrer par Genre</div>
      <div className="projects__filters">
        <select
          className="projects__filters__genre__filter"
          onChange={handleSelectMusic}
        >
          <option value="null"> Ne pas filtrer</option>
          {genreList.map((genre) => {
            return <option value={genre.name}>{genre.name}</option>;
          })}
        </select>
        <select
          className="projects__filters__select"
          onChange={handleSelectOrder}
        >
          <option value="name/ASC">Nom (ordre ascendant) </option>
          <option value="name/DESC">Nom (ordre descendant) </option>
          <option value="date/ASC">Date ( du + ancien au + récent )</option>
          <option value="date/DESC">Date ( du + récent au + ancien )</option>
        </select>
        <div className="projects__filters__genre"></div>
      </div>
      {projectsIsLoading && <Loading />}

      {!projectsIsLoading && (
        <div className="projects__list">
          {projectsList.map((project) => {
            return (
              <div className="projects__list__card">
                <ProjectCard
                  key={"project" + project.id}
                  {...project}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Projects.propTypes = {
  projectsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  // loadProject: PropTypes.func.isRequired,
  projectsIsLoading: PropTypes.bool.isRequired,
};
export default Projects;
