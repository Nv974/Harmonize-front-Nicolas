import React from 'react';
import ProjectCard from '../../containers/ProjectCard';
import SliderLastest from '../Sliders/sliderLastest';
import SliderHottest from '../Sliders/sliderHottest';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import {Link } from 'react-router-dom';


import './home.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faDownload, faHandshake, faMusic, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

const Home = ({projectsListNew,isLoadingHome, isResponsive,hottestList}) =>{


return(
<div className="home">
    <div className="home__header">
        <div className="home__content">
            <h2 className="home__title">La musique directement chez vous</h2>
            <p className="home__text">
                Collaborez avec des musiciens et techniciens aux quatre coins du monde
            </p>
            <a href="#plus" class="home__link" >Mode d'emploi</a>
        </div>
    </div>
    <div className="home__project"> 
        <h2 className="home__project__title">Les derniers projets</h2> 
        {isLoadingHome && <Loading />}
        {!isLoadingHome && <div className="home__project__cards">
            { !isResponsive ? projectsListNew.map((project)=> <ProjectCard key={'home_new'+project.id} {...project} />) : <SliderLastest listToDisplay={projectsListNew} /> }
        </div>}
        <Link to ='/Projets' className="home__project__button">Voir tous les projets</Link>
    </div>
    <div className="home__middle" id="plus">
    <div className="home__middle__content">
        <h2 className="home__middle__title">Comment ça marche</h2>
        <div className="home__middle__text">
            <div className="home__middle__card">
                <FontAwesomeIcon icon={faMarker} className="home__middle__icon" size="3x"/>
                <p>Inscris-toi</p>
            </div>
            <div className="home__middle__card">
                <FontAwesomeIcon icon={faMusic} className="home__middle__icon" size="3x"/>
                <p>Créé ton projet</p>
            </div>
            <div className="home__middle__card">
                <FontAwesomeIcon icon={faDownload} className="home__middle__icon" size="3x"/>
                <p>Upload ta musique</p>
            </div>
            <div className="home__middle__card">
                <FontAwesomeIcon icon={faHandshake} className="home__middle__icon" size="3x"/>
                <p>Collabore avec d'autres artistes</p>
            </div>
            <div className="home__middle__card">
                <FontAwesomeIcon icon={faGlobeEurope} className="home__middle__icon" size="3x"/>
                <p>Partage à travers le monde</p>
            </div>
        </div>
    </div>
    </div>
    <div className="home__project">  
        <h2 className="home__project__title">Les projets les plus actifs</h2>
        {isLoadingHome && <Loading />}
        {!isLoadingHome &&<div className="home__project__cards">
        {!isResponsive ? hottestList.map((project)=> <ProjectCard key={'home_needest'+project.id} {...project} />):<SliderHottest  listToDisplay={hottestList}/>}
        
        </div>}
        <Link to ='/Projets' className="home__project__button">Voir tous les projets</Link>
    </div>

  </div>


);}

Home.propTypes = {
    isLoadingHome : PropTypes.bool.isRequired,
    projectsListNew: PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired
        })
    )
}


export default Home;