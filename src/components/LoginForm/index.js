import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

import Field from './Field';

import './loginform.scss'

const LoginForm = ({isLogged,login,password,changeField,logIn,logOut,username,picture,setLoginVisibility,loginIsVisible}) =>{ 
const [cookies,setCookie,removeCookie] = useCookies();
const buttonVisibilityClass = loginIsVisible?'loginform__button loginform__button--open'
:'loginform__button loginform__button--close';

let loginFormClass=loginIsVisible?'loginform loginform--open'
:'loginform loginform--close';

if (loginIsVisible && isLogged) {loginFormClass = "loginform "}


const handleOpen = () =>{
    setLoginVisibility(!loginIsVisible)
}
const handleSubmit=(evt) =>{
    evt.preventDefault();
    logIn();
}
const handleLogOut = () =>{
    removeCookie("sessionHarmonize");
    logOut();
    
}


return(
<form className={loginFormClass} onSubmit={handleSubmit}>
    <button type='button' onClick={handleOpen} id="open" className={buttonVisibilityClass}> + </button>
    {!isLogged &&
    <>
    {loginIsVisible && <>

        <p className="loginform__text" onClick={handleOpen} >Connexion</p>

  
  <Field name="login"
        placeholder="Entrer votre login"
        value={login}
        type='text'
        onChange={changeField}
  /> 
  <Field name="passwordLogin"
        placeholder="Entrer votre mot de passe"
        value={password}
        type='password'
        onChange={changeField}
        />
       {/* <p className="loginform__text--error">{messageLog}</p> */}
        <button type='submit' className="loginform__submit"> Se connecter </button>
        
        </>}
        </>}
        {isLogged && 
        <> 
        {loginIsVisible && 
        <> 
            <div className="userinfos__header__box--up">
                <p className="loginform__text">Bonjour {username}</p>
                {picture?<img className="loginform__avatar" src={"http://ec2-3-84-168-178.compute-1.amazonaws.com/images/profils/"+picture}
                alt={`avatar`} />:
            <FontAwesomeIcon icon={faMusic} size="2x" className="loginform__avatar" />} 
            </div>
        <div className="userinfos__header__box--down">
            <Link className="loginform__message" to='/MonCompte'>Messagerie</Link>
            
        </div>
        <button onClick={handleLogOut} className="loginform__submit loginform__submit--disconnect">Se deconnecter</button>
        </> }
        </>
        }
</form>
);}
LoginForm.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    login : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    changeField : PropTypes.func.isRequired,
    logIn : PropTypes.func.isRequired,
    logOut : PropTypes.func.isRequired,
}
export default LoginForm;