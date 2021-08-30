//ce composant est affiché lorsque l'on consulte la liste des messages

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faEnvelopeOpen,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ViewMessage from './ViewMessage';

import './messagecard.scss'

const SendedMessages = ({is_read,userId,title,sender,recipient, created_at,message, deleteMessage, id}) =>{
    const [messageIsVisible, setVisibility] = useState(false);
    const hanldleSetVisibility = () =>{
        setVisibility(!messageIsVisible)
    } 

    const handeleDelete = (id) => {
        deleteMessage(id);
    }
    

    const display = userId === sender.id ? "message__card message__card--show" : "message__card message__card--hidden"

return(
    <div className="message__box" onClick={hanldleSetVisibility}>
        <div className={display} >
            <div className="message__card__isread">{is_read?<FontAwesomeIcon icon={ faEnvelopeOpen } />:<FontAwesomeIcon icon={ faEnvelope } />}</div>
            <Link exact to={'/Artistes/'+recipient.slug} className="message__card__name">{recipient.username}</Link>
            <div className="message__card__title">{title.length > 10 ? (title).slice(0,10) + "..." : title }</div> 
            <div className="message__card__date">{(created_at).slice(0,10)}</div>
            <div className="message__card__trash"  onClick={()=>handeleDelete(id)}> <FontAwesomeIcon icon={ faTrashAlt } /></div>
        </div>
        {messageIsVisible && <ViewMessage message={message} title={title} />}
</div>
);}

// Faire les proptypes

export default SendedMessages;