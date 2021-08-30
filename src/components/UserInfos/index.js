import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cardPicture from '../../assets/img/cards/profil.jpg';



import NewProjectForm from '../../containers/NewProjectForm';
import ProjectCard from '../../containers/ProjectCard'
import SignUp from '../../containers/SignUp';
import Messages from '../../containers/Messages';

import './userinfos.scss'

const UserInfos = ({myProjects,seeMyInfos,picture,uploadProfilePicture, username, email, description, profil}) =>{ 

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


    let fiveProjects = myProjects.slice(0,5);
    const [selectedFilePicture,setSelectFilePicture] = useState(null);
    const [seeAllProjects,setSeeAllProjects]=useState(false);
    const [seeUserInfos,setSeeUserInfos]=useState(false);
    const [isSelect, setSectionSelect] =useState("messages");
    
    const handleFilePicture = (evt)=> {
        setSelectFilePicture(evt.target.files[0]);
    }
    const handleSubmitFiles= (evt) =>{
        evt.preventDefault();  
        uploadProfilePicture(selectedFilePicture);
    }

    const profilPicture = picture? "http://ec2-3-84-168-178.compute-1.amazonaws.com/images/profils/" + picture : cardPicture

    useEffect(()=>{
        seeMyInfos();
    },[])


return(
<div className="userinfos">
    <div className="userinfos__header">
        <h2 className="userinfos__header__title">Votre espace personnel</h2>
        <div classname="userinfos__header__links">
            <button onClick={()=>setSectionSelect("messages")} className="userinfos__header__links__text">Messagerie</button>
            <button onClick={()=>setSectionSelect("newProject")} className="userinfos__header__links__text">Nouveau projet</button>
            <button onClick={()=>setSectionSelect("myProject")} className="userinfos__header__links__text">Mes projets</button>
            <button onClick={()=>setSectionSelect("myInfo")} className="userinfos__header__links__text">Mes informations</button>
        </div>
    </div>
    <div className="userinfos__container">
    {isSelect==="messages" && <div className={"userinfos__messages "+isSelect}>
        <Messages />
    </div>}
   {isSelect==="newProject" && <div className={"userinfos__projectform "+isSelect}>
        <NewProjectForm />
    </div>}
    {isSelect==="myProject" &&  <div className={"userinfos__projects "+isSelect}>
        <div className="userinfos__projects__cards">
            {!seeAllProjects && fiveProjects.map((project)=> <ProjectCard key={project.id} {...project} />)}
            
            {seeAllProjects && myProjects.map((project)=> <ProjectCard key={project.id} {...project} />)}
            
        </div>
        
        {!seeAllProjects ? myProjects.length > 5 && <button className="userinfos__projects__buttonproject" onClick={()=>setSeeAllProjects(true)}>Voir tous mes projets</button> :<button className="userinfos__projects__buttonproject" onClick={()=>setSeeAllProjects(false)}>Fermer la liste complète</button>}
       
    </div>}
    {isSelect==="myInfo" && <>
    <div className={"userinfos__modifs "+isSelect}>
        <button className={seeUserInfos? "userinfos__modifs__button--hide" : "userinfos__modifs__button"  } onClick={()=>setSeeUserInfos(true)}>Modifier mes informations personnelles</button>


    </div>

    <div className={ seeUserInfos? "userinfos__profil--hide" : "userinfos__profil" }>
        <img src={profilPicture}  className="userinfos__profil__img"/>
        <div className="userinfos__profil__username"> {username} </div>
        <div className="userinfos__profil__email"> {email} </div>
        <div className="userinfos__profil__description"> {description} </div>
        <div className="userinfos__profil__profil"> {profil_name} </div>


    </div>

    {seeUserInfos && 
    <>
        <button onClick={()=>setSeeUserInfos(false)} className={seeUserInfos? "userinfos__modifs__button" : "userinfos__modifs__button--hide" }  >
            Revenir à mon profil
        </button>

     
    <SignUp />
     <form className="new__users__form" onSubmit={handleSubmitFiles}>
        <label htmlFor="select-picture">{picture?"Modifier":"Ajouter"} mon image de profil</label>
        <div className="new__users__form__file">
            <input name="select-picture" type="file" onChange={handleFilePicture} className="new__users__form__file__input" />
            <button className="new__users__form__submit" type="submit"  >Je change de tête</button>
        </div>
    </form>
    
    </>}
    </>}
    </div>
</div>
);}

UserInfos.propType = {
    username: PropTypes.string.isRequired,
    projects: PropTypes.array.isRequired,
    logOut:PropTypes.func.isRequired,
}

export default UserInfos;