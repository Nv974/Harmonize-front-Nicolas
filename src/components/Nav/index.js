import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo/logo_small_icon_only-color.png';
import LoginForm from '../../containers/LoginForm';

import './nav.scss'
import { createPortal } from 'react-dom';

const Nav = ({isLogged,isResponsive, setResponsiveOn, setResponsiveOff }) => {
  const [moveNav,setMoveNav] = useState("fixed");
useEffect(()=>{
    if (moveNav=== "fixed"){
    window.onscroll = () =>{
        if (window.scrollY > 12){
          setMoveNav("move");
        }
     }
    }
  if (moveNav=== "move"){
  window.onscroll = () =>{
    if (window.scrollY < 12){
      setMoveNav("fixed");
    }
  }
}
})

if(window.innerWidth < 900  ){setResponsiveOn()}


window.onresize = () => {
  window.innerWidth < 900? setResponsiveOn() : setResponsiveOff()
}


const setBurger = () => {
  const burger = document.querySelector('.nav__burger');
  burger.classList.toggle('active');
  
  const mobileNav = document.querySelector('.nav__mobile');
  mobileNav.classList.toggle('show');

}
 
return(
  <div className={"nav nav--"+moveNav}>
    <img className="nav__logo" src={logo} />
    
    <NavLink exact to ='/'><h1 className="nav__title" > HARMONIZE</h1></NavLink>
    {/* Cette navbar deviendra une suite de NavLink après utilisation du routeur */}
    {!isResponsive && <nav className="nav__bar">
      <div className="nav__bar__left">
        <NavLink exact to ='/Projets' className="nav__bar__link">Projets</NavLink>
        <NavLink exact to ='/Artistes' className="nav__bar__link">Artistes</NavLink>
        {!isLogged && <NavLink exact to ='/Inscription' className="nav__bar__link">Inscription</NavLink>}
      </div>
      <div className="nav__bar__right">
        {isLogged && <NavLink exact to ='/MonCompte' className="nav__bar__link--right ">Mon Compte</NavLink>}
        <LoginForm />
  </div>
    </nav>}
    {isResponsive && <div className="nav__burger" onClick={setBurger} >
      <span></span>
    </div>}


  

  {isResponsive &&
  <div className="nav__mobile" >
    <div className="nav__mobile__links">
      <NavLink exact to ='/Projets' className="nav__mobile__links__link" onClick={setBurger} >Projets</NavLink>
      <NavLink exact to ='/Artistes' className="nav__mobile__links__link" onClick={setBurger} >Artistes</NavLink>
        {!isLogged && <NavLink exact to ='/Inscription' className="nav__mobile__links__link" onClick={setBurger} >Inscription</NavLink>}
        {isLogged && <NavLink exact to ='/MonCompte' className="nav__mobile__links__link--right"  onClick={setBurger} >Mon Compte</NavLink>}
        {isLogged && <NavLink exact to ='/MonCompte' className="nav__mobile__links__link--right"  onClick={setBurger} >Mon Compte</NavLink>}
        <LoginForm />
        
    </div>
  </div>}
</div>

);}

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
}

export default Nav;