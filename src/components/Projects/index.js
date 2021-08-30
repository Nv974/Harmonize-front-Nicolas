import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

//le composant doit afficher la liste de touts les projets
import './projects.scss'
import ProjectCard from '../../containers/ProjectCard';
import Loading from '../Loading';

const Projects = ({projectsList,loadProject,loadProjectsFromAPI
  ,projectsIsLoading,projectsOrder, setProjectsOrder, setLoading, setGenreFilter, genreSelected,genreList}) =>{ 

 const handleSelectOrder = (event) => {
  const order= event.target.value;
  setLoading(true, "projects");
  setProjectsOrder(order);
 }

 const handleSelectMusic = (event) => {
  const genreValue = event.target.value;
  setGenreFilter(genreValue);
 }
 let [list,setList]=useState([])
 useEffect(()=>{
  loadProjectsFromAPI();
 },[projectsOrder])

 
 useEffect(()=>{
   if (genreSelected !=='null'){
    projectsList = projectsList.filter(project =>
       project.music_genre.name === genreSelected)
   }
    setList( list=projectsList.map((project)=>{
      console.log(project);
      return(<div className="projects__list__card"><ProjectCard
      key={"project"+project.id+project.name} {...project} loadProject={loadProject}/></div>)
    }))
 },[genreSelected,projectsOrder])


return(
<div className="projects">
  <div className="projects__header">

      <h2 className="projects__header__title">Les projets</h2>

  </div>
    <div className="projects__filters__genre__title" > Filtrer par Genre 
      {/* <input checked={check} type="checkbox" onChange={checkFilterChange} className="project__filters__genre__checkbox" /> */}
    </div>
      <div className="projects__filters" >
          <select className="projects__filters__genre__filter" onChange={handleSelectMusic} >
            <option value='null'> Ne pas filtrer</option>
            {genreList.map( (genre) => {
              return(
              <option value={genre.name} >{genre.name}</option>
              )
              })
            }
          </select> 
      <select className="projects__filters__select" onChange={handleSelectOrder} >

        <option value="name/ASC">Nom (ordre ascendant) </option>
        <option value="name/DESC">Nom (ordre descendant) </option>
        <option value="date/ASC">Date ( du + ancien au + récent )</option>
        <option value="date/DESC">Date ( du + récent au + ancien )</option>
        </select>
        <div className="projects__filters__genre" >
      </div>
     

  </div>
   {projectsIsLoading && <Loading />}       
 
  { !projectsIsLoading &&  <div className="projects__list">
    {list}
  </div>}
</div>
);}

Projects.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired}
  ).isRequired).isRequired,
  // loadProject: PropTypes.func.isRequired,
  projectsIsLoading: PropTypes.bool.isRequired,
}
export default Projects;