//ce composant est affiché lorsque l'on consulte la liste des messages

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEnvelopeOpen,faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ViewMessage from './ViewMessage';

import './messagecard.scss'
import { Link } from 'react-router-dom';

const ReceivedMessages = ({is_read,userId,title,sender,created_at,message, id ,deleteMessage,messageIsRead}) =>{


    const commentDate = new Date(created_at); 
    const day = commentDate.getDate(); 
    const month = commentDate.getMonth() + 1 ; 
    const year = commentDate.getFullYear();
    const hours = commentDate.getHours();
    const minutes = commentDate.getMinutes()
    const dateFr = day + "/" + "0"+month + "/" + year + " à "+ hours +":" + minutes;

    const [messageIsVisible, setVisibility] = useState(false);
    const hanldleReadMessage = () =>{
        setVisibility(!messageIsVisible);
        messageIsRead(true,id);
    } 

    const handeleDelete = (id) => {
        deleteMessage(id);
    }

    const display = userId === sender.id ? "message__card message__card--hidden" : "message__card message__card--show"

return(
    <div className="message__box"  onClick={hanldleReadMessage}>
        <div className={display} >
            <div className="message__card__isread">{is_read?<FontAwesomeIcon icon={ faEnvelopeOpen } />:<FontAwesomeIcon icon={ faEnvelope } />}</div>
            <Link exact to={'/Artistes/'+sender.slug} className="message__card__name">{sender.username}</Link>
            <div className="message__card__title">{title.lenght > 10 ? (title).slice(0,10) + "..." : title }</div> 
            <div className="message__card__date">{(dateFr).slice(0,10)}</div>
            <div className="message__card__trash" onClick={()=>handeleDelete(id)}> <FontAwesomeIcon icon={ faTrashAlt } /></div>
        </div>
        {messageIsVisible && <ViewMessage message={message} title={title} />}
</div>
);}

// Faire les proptypes

export default ReceivedMessages;