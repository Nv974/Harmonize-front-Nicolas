import React, { useState, useEffect  } from 'react';
import ReceivedMessages from '../../containers/Messages/ReceivedMessages'
import SendedMessages from '../../containers/Messages/SendedMessages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';



import './messages.scss'
import NewMessage from '../../containers/Messages/NewMessage';

const Messages = ({messagesList,loadMessagesFromApi, userId}) =>{

    useEffect(()=>{
        loadMessagesFromApi();
    },[])
    const [showReceivedMessages,setReceivedMessagesVibility] = useState(true);
    
    const handleShowReceived = () =>{
        setReceivedMessagesVibility(true);
        setSendedMessagesVibility(false)
    }

    const [showSendedMessages,setSendedMessagesVibility] = useState(false);
    
    const handleShowSended = () =>{
        setSendedMessagesVibility(true);
        setReceivedMessagesVibility(false)
    }


    const [newMessageIsVisible,setNewMessageVibility] = useState(false);
    const handleSet =()=>{
        setNewMessageVibility(!newMessageIsVisible)
    }
    
    return(
        
        <div className="messages ">
            {!newMessageIsVisible &&
            <div className="messages__toggle">
                <h2 onClick={handleShowReceived}>Boîte de réception</h2> 
                <h2 onClick={handleShowSended}>Boîte d'envoi</h2>
                <h2 onClick={handleSet}> Nouveau message &nbsp; <span><FontAwesomeIcon icon={ faPaperPlane }  /> </span>    </h2>
            </div>}
            {newMessageIsVisible && <NewMessage  setNewMessageVibility={setNewMessageVibility}/>}
            {showReceivedMessages &&
            <div className="messages__received">
            {!newMessageIsVisible &&<div className="messages__table">
            <h2 className="messages__title">Messages Reçus</h2>
            <div className="messages__table__header">
            <div className="messages__table__header__title--empty"></div>
            </div>
            {messagesList.map((message)=><ReceivedMessages userId={userId} {...message}/>)}
            </div>}
            </div> }
            {showSendedMessages &&
            <div className="messages__sended">
            {!newMessageIsVisible &&<div className="messages__table messages--sended">
            <h2 className="messages__title">Messages Envoyés</h2>
            <div className="messages__table__header">
            </div>
            {messagesList.map((message)=><SendedMessages userId={userId} {...message}/>)}
            </div>}

            </div>}   
        </div>
);}

//Faire les Proptypes

export default Messages;