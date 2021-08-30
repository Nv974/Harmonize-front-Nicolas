import React, { useEffect,useState } from 'react';
import Comments from '../../components/Project/Comments';
import Field from './Field'
import axios from 'axios';
import PropTypes from 'prop-types';

import cardPicture from '../../assets/img/cards/project.jpeg'

import {Link, Redirect,useHistory} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import './project.scss';
import Loading from '../Loading';
const Project = ({isProject,projectIsLoading,token,project,loadProject,playThisSong,
  loadInfoToUpdate,setLoading,user_id,changeField,editProject,nameToUpdate,updateGenre,updateDescription , deleteProject,isLogged}) => {

    useEffect(()=> {
  if (isProject ) {
    setLoading(true,"project");
    loadProject(isProject.id);
  } else {
    return <Redirect to="/Error404" />;
  }},[isProject])
  useEffect(() => {
    if (!projectIsLoading) {
      if (user_id === project.user.id) {
        setProjectIsMine(true);
      } else {
        setProjectIsMine(false);

      }
    }
  }, [projectIsLoading,isLogged])
  const [genreList,setGenreList] = useState([])
  useEffect(()=>{
      const list = axios.get("http://ec2-3-84-168-178.compute-1.amazonaws.com/api/v1/music_genre/")
      .then(response => setGenreList(response.data));
      
  },[])
  const [projectIsMine, setProjectIsMine] = useState(false);
  const [isModify, setisModify] = useState(false);
  const handleModifyOpen = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    loadInfoToUpdate(project.name,project.description,project.music_genre.id);
    setisModify(true);     
  }

const handleSelect= (evt) =>{
    changeField(evt.target.value,"updateGenre")
} 
const handleSubmit=(evt)=>{
  evt.preventDefault();
  editProject();
}
const history=useHistory()
const handleDeleteProject = () => {
  deleteProject();
  history.push('/MonCompte');
  
}

return(
<div className="project">
  {projectIsLoading && <Loading />}
  {isModify &&
        <form className="project__update" onSubmit={handleSubmit}>
          <h2>Modifiez votre projet</h2>
          <Field
            labelText="Nom du projet"
            name='nameToUpdate'
            type='text'
            value={nameToUpdate}
            onChange={changeField}
            placeholder="..."
          />
          <div className="new__project__form__field field__updateProjectGenre">
            <label htmlFor="genre-select">Genre:</label>
            <select name="updateGenre" id="genre-select" onChange={handleSelect}>
              <option value="">--Please choose an option--</option>
              {genreList.map((genre) => <option key={`genre-${project.name}`} value='1'>{genre.name}</option>)}
            </select>
          </div>
          <Field
            labelText="Décrire votre projet"
            name='updateDescription'
            type='text'
            value={updateDescription}
            onChange={changeField}
            placeholder="..."
          />
          <button class="new__project__form__submit" type="submit" >Modifier</button>
        </form>}
  {!projectIsLoading &&
  <>
  <div className="project__infos">
    <div className="project__infos__top">
      <img className="project__infos__img" src={project.picture?"http://ec2-3-84-168-178.compute-1.amazonaws.com/images/projects/"+project.picture:cardPicture} />
      <div className="project__infos__text">
        <h3 className="project__infos__text__name"> {project.name} </h3>
      

        <Link exact to ={'/Artistes/'+project.user.slug} className="project__infos__text__author">
        <h4>par: {project.user.username}</h4></Link>
        <h4 class="project__infos__text__listen">Ecouter le projet</h4>
        <button className="card__button__play" onClick={()=>playThisSong("projects/"+project.audio_url,project.name,project.user.username)}><FontAwesomeIcon icon={faPlayCircle} size="3x" /></button>
      
        {projectIsMine && <div className="project__edit"> <button className="project__edit__modify" onClick={handleModifyOpen}> Modifier mon projet <FontAwesomeIcon icon={faEdit} /> </button> 
        <button className="project__edit__delete" onClick={handleDeleteProject} > Supprimer mon projet <FontAwesomeIcon icon={faTrashAlt}  /> </button>
      </div>
      }
      </div>
    </div>
    <div className="project__infos__bottom">
      <div class="project__infos__description">
        <h4 class="project__infos__description__title">Presentation du projet</h4>
        <p className="project__infos__description__text">{project.description}</p>
      </div>
    </div>
  </div>
    <Comments comments={project.comments} playThisSong={playThisSong} project={project} token={token} userId={user_id} />
    </>}
</div>
);}

Project.propTypes ={
   project: PropTypes.shape({
     name: PropTypes.string.isRequired,
     comments: PropTypes.array.isRequired,
     user: PropTypes.shape({
       username:PropTypes.string.isRequired,
     })
   }),
  projectIsLoading: PropTypes.bool.isRequired,
}
export default Project;