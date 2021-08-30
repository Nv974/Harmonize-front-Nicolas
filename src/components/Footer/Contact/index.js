import React, { useState } from 'react';
import {sendContactMessage} from '../../../actions/middleware';

import './contact.scss';

const Contact = () => {
const [name,setName]=useState('');
const [mail,setMail]=useState('');
const [message,setMessage]=useState('');


    const handleContactForm = (event) =>{
        event.preventDefault();
        sendContactMessage(name,mail,message);
    }

    return(

        <div className="contact">
        <form className="contact__form" onSubmit={handleContactForm}>
                <label for="name">Nom</label>
                <input className="contact__form__name" type="text" id="name" placeholder="Nom" onChange={()=>setName}/>
                <label for="email">Adresse mail</label>
                <input className="contact__form__email" type="email" id="email" placeholder="Email" onChange={()=>setMail} />
                <label for="email">Message</label>
                <textarea className="contact__form__msg" id="msg" placeholder="Votre message..." onChange={()=>setMessage} />
                <button className="contact__form__submit" type="submit">Envoyer</button>
        </form>
        </div>
    )
    
  
};

export default Contact;
