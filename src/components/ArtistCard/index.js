import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import cardPicture from '../../assets/img/cards/profil.jpg'

import './card.scss'

const ArtistCard = ({username,picture,profil,description,slug}) =>{

    const profilPicture = picture? "http://ec2-3-84-168-178.compute-1.amazonaws.com/images/profils/" + picture : cardPicture
    
    let profil_name= '';
        switch(profil){
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
return(
<div className="card__artist">
    <div className="box-artist" >
        <Link exact to={'/Artistes/'+slug} >
            <img className="card__artist__img" src={profilPicture} alt={`de ${username}`}/>
        </Link> 
    </div>
    
    
    <h4 className="card__username">{username}</h4>
  
    <p className="card__artistdescription">{ description && description.length >60?(description).slice(0,80)+"...":description} </p>
    <p className="card__artistprofil">{profil_name}</p>
   
    <Link className="card__link card__link__artiste" exact to={'/Artistes/'+slug} >Voir ses informations</Link>

</div>
)}

ArtistCard.propTypes = {
    id : PropTypes.number.isRequired,
    username : PropTypes.string.isRequired,
    picture : PropTypes.string,
    profil : PropTypes.number.isRequired,
    description : PropTypes.string,
    loadArtist : PropTypes.func.isRequired,
}

ArtistCard.defaultProps = {
    picture: '', /* TODO : Mettre une image par défaut */
    description: ''
  };


export default ArtistCard;