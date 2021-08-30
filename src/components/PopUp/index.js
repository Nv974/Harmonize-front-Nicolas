import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading';

import './popup.scss'
//to open a popUp func : openPopUp("alert/success","MonMessage","MonTitre")
const PopUp = ({isOpen, style, message,title,closePopUp}) => {
console.log(isOpen);
return(
<div className={`popup ${style} ${isOpen}`}>
  <button className="popup__button"  onClick={closePopUp}><FontAwesomeIcon icon={faTimesCircle} color="white" size="2x" /></button>
  <h3 className="popup__title" >{title}</h3>
  {isOpen==="load" && <Loading />}
  <p className="popup__message" >{message}</p>
</div>
);}

PopUp.propTypes = {

 };

export default PopUp;