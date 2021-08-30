import React from 'react';

import Field from './Field';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './newmessage.scss'

const NewMessage = ({changeField,title,recipe,content, newMessage, artistsList, setMessageRecipient,setNewMessageVibility}) => {
     


      const handleChangeField =(evt) =>{
            changeField(evt.target.value,'content')
      }
      const sendMessage = (event) =>{
            event.preventDefault();
            newMessage();
      }

      const handleSelect = (event) =>{
            const messageRecipient = event.target.value;
            setMessageRecipient(messageRecipient);
      }

      return(<div className="new__message">
            <button className="new__message__close" onClick={()=>setNewMessageVibility(false)}><FontAwesomeIcon icon={faTimesCircle} size="2x" /></button>
            <form className="new__message__form" onSubmit={sendMessage}>
            {/* <button className="new__message__close" onClick={setNewMessageVibility}><FontAwesomeIcon icon={faTimesCircle} color="white" size="2x" /></button> */}
            <h2>Nouveau Message</h2>
            <select onChange={handleSelect}> <option>Destinataire</option> 
            {artistsList.map(artist=> <option value={artist.id} key ={artist.id} {...artist} >{artist.username}</option>)} </select>
            <Field
                  name="title"
                  placeholder="Entrer votre titre"
                  value={title}
                  type='text'
                  onChange={changeField}
            />
            <textarea
                  className="new__message__form__content"
                  name="content"
                  placeholder="Entrer votre message"
                  value={content}
                  onChange={handleChangeField}
            ></textarea>
            <button type='submit'>Envoyer</button>
            </form>
            </div>
      )

};
export default NewMessage;