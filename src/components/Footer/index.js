import React from 'react';
import { NavLink } from 'react-router-dom';


import './footer.scss';

const Footer = () => (
  <div className="footer">
      <NavLink exact to ='/Contact' className="footer__contact"> Contactez-nous </NavLink>
      <NavLink exact to ='/AboutUs' className="footer__aboutus"> Qui sommes nous? </NavLink>
      <NavLink exact to ='/Mentions' className="footer__mentions"> Mentions légales </NavLink>
  </div>
);

export default Footer;
