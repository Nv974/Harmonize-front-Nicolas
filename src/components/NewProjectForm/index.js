import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import Field from './Field';

import './newprojectform.scss';
import { useHistory } from 'react-router-dom';

const NewProjectForm = ({name, changeField,description,submitForm,tempId,token,uploadFiles,genreList,uploadSpinner,tempSlug}) =>{ 
    const history=useHistory()
    useEffect(()=>{  
        if(tempSlug != null){       
            history.push('/Projets/'+tempSlug);
        }
    },[tempSlug])
    const [selectedFileAudio,setSelectFileAudio] = useState(null);
    const [selectedFilePicture,setSelectFilePicture] = useState(null);
    const handleSelect= (evt) =>{
        changeField(evt.target.value,"newProjectGenre")
} 
    const handleSubmit=(evt) =>{
        evt.preventDefault();
        submitForm()
    }
    const handleFileAudio = (evt)=> {
        // console.log(evt.target.files[0]);
        setSelectFileAudio(evt.target.files[0]);
    }
    const handleFilePicture = (evt)=> {
        // console.log(evt.target.files[0]);
        setSelectFilePicture(evt.target.files[0]);
    }
    const handleSubmitFiles= (evt) =>{
        evt.preventDefault();
        uploadSpinner('load');
        uploadFiles(selectedFileAudio,selectedFilePicture);
}
    return(
        <>{!tempId &&
<form className="new__project__form" onSubmit={handleSubmit}>
    <h3 className="new__project__form__title">Ton nouveau projet</h3>

    <Field 
    labelText="Nom du projet"
     name='newProjectName' 
     type='text'
     value = {name}
     onChange = {changeField}
    />
    <div className="new__project__form__field field__newProjectGenre">
    <label htmlFor="genre-select">Genre</label>
    <select  name="newProjectGenre" id="genre-select" onChange={handleSelect}>
        <option value="">Veuillez choisir un genre</option>
        {genreList.map((genre) => <option key={`genre-${genre.id}`}value={genre.id}>{genre.name}</option>) }
    </select>
    </div>
    <Field 
    labelText="Décrire votre projet"
    name='newProjectDescription' 
    type='textarea'
    value = {description}
    onChange = {changeField}
    />
   {/* Créer une condition de visibilité du formulaire d'envoie de fichier,
   En réponse à la création du projet.
   Chaque input File est controlé.
   Lors du submit ça envoie le fichier en post. */}
    <button className="new__project__form__submit" type="submit" >Créer</button>
    <p className="new__project__form__mentions" > Tout oeuvre déposé sur le site Harmonize doit être libre de droit ou doit appartenir à la personne l'ayant déposé sur le site </p>
</form>}
{tempId &&
    <form className="new__project__form upload__form" onSubmit={handleSubmitFiles}>
    <h3 className="new__project__form__title">Ajoutez un audio ou une image</h3>
    <div>
        <label htmlFor="select-audio">Piste Audio</label>
        <input name="select-audio" type="file" onChange={handleFileAudio} />
    </div>
    <div>
        <label htmlFor="select-picture">Image du projet</label>
        <input name="select-picture" type="file" onChange={handleFilePicture} />
    </div>
    <button className="new__project__form__submit" type="submit">Créer</button>
</form>}
</>
);}
NewProjectForm.propTypes = {
    name: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    description:PropTypes.string.isRequired,
    submitForm:PropTypes.func.isRequired,
}
export default NewProjectForm;