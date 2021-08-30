import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom';
import Loading from '../Loading';
import cardPicture from '../../assets/img/cards/profil.jpg'


import ProjectCard from '../../containers/ProjectCard';

import './artist.scss';

const Artist = ({artist,isLoading,isArtist,loadArtist,setLoading}) => {

    let profil_name= '';
        switch(artist.profil){
            case 1:
            profil_name= 'Musicien';
            break;
            case 2: 
            profil_name= 'Technicien';
            break;
            case 3 : 
            profil_name= 'Musicien et technicien';
            break;
            default :
            profil_name= 'visiteur';
    }

    console.log(artist);
    useEffect(()=> {
        if (isArtist) {
            setLoading(true,"artist");
          loadArtist(isArtist.id);
        } else {
          return <Redirect to="/Error404" />;
        }},[isArtist])

        const profilPicture = artist.picture? "http://ec2-3-84-168-178.compute-1.amazonaws.com/images/profils/" + artist.picture : cardPicture


    return (
        <div className="artist">
             {isLoading && <Loading />}
            {!isLoading && artist&&
            <>
            <div className="artist__header">
                <h1>Page de {artist.username}</h1>
                <img  className="artist__header__picture" src={profilPicture} alt={`avatar de ${artist.username}`}/>
                <h4 className="artist__header__profil" >{ profil_name }</h4>

            </div>
            <div className="artist__profil">
                <div className="artist__profil__description">{artist.description}</div>
            </div>

            
            <div className="artist__projects">
                 <h2>Les projets de {artist.username}</h2>
                <div className="artist__projects__cards">

                    {artist.projects.map((project) =>{ 

                    return(
                    <ProjectCard key={project.project_id} {...project} username={artist.username}/>)})}
                </div>
            </div>
            </>}
        </div>
    )

};

Artist.propTypes = {
    artistToDisplay : PropTypes.string.isRequired,
    isLoading : PropTypes.bool.isRequired
}



export default Artist;
