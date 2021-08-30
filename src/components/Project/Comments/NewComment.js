import React,{useEffect, useState} from 'react';
import './comments.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'




const NewComment = ({userComment,setNewComment, addComment,choiceUpload,uploadAudio,uploadSpinner,clearComment,projectToDisplay,loadProject,openPopUp}) => {
    
  const handleNewComment = (event) =>{
        const newComment = event.target.value;
        setNewComment(newComment);
      }
    
      const handleSendComment = (event) => {
        event.preventDefault();
        // console.log("message envoyé");
        addComment();
      }
      useEffect(()=>{
        setSelectFileAudio(null)
      },[])
      const handleShowComment = (event) =>{
        event.preventDefault();
        const commentInput = document.querySelector('.new-comment__form');
        commentInput.classList.toggle('new-comment__form--show')
      }
      const [selectedFileAudio,setSelectFileAudio] = useState(null);
      const handleSubmitFiles= (evt) =>{
        evt.preventDefault();  
        uploadSpinner('load');
        uploadAudio(selectedFileAudio);
    }
    const handleFileAudio = (evt)=> {
      setSelectFileAudio(evt.target.files[0]);
  }
    const handleNoFile = (evt) =>{
      evt.preventDefault();
      clearComment();
      loadProject(projectToDisplay.id)
      openPopUp("success","Message envoyé sans fichier Audio","")
    }

    return(
        <div className="new-comment">
           {!choiceUpload &&  <><button className="new-comment__add" onClick={handleShowComment}> Commenter </button>
            <form className="new-comment__form">
              <div className="new-comment__form__container">
                <input className="new-comment__form__input" placeholder="Ecris ton commentaire ici ..."  type="text" onChange={handleNewComment} value={userComment}></input>
                <button onClick={handleSendComment} type="submit" className="new-comment__form__button" > <FontAwesomeIcon icon={faPaperPlane} />Publier</button>
              </div>
            </form> </>}
            {choiceUpload && 
            <form className="new__comment__form" onSubmit={handleSubmitFiles}>
              {!selectedFileAudio &&<><label htmlFor="select-audio">Ajouter une piste </label>
              <input name="select-audio" type="file" onChange={handleFileAudio} />
              <button className="new__comment__form__submit--not" onClick={handleNoFile}>Je ne veux rien envoyer</button> </>}
             {selectedFileAudio && <>
              <button className="new__comment__form__submit" type="submit"  >J'envoie mon son</button>
              </>}
          </form>
            }
        </div>
        
    )
    
};

export default NewComment;