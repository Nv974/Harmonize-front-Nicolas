import React from 'react';


const Card = ({name, picture, role ,techno}) => (
  <div className="card">
    <div className="card__img"> <img src={picture} alt={`avatar`}/></div>
    <div className="card__name">{name}</div>
    <div className="card__techno">{techno}</div>
    <div className="card__role">{role}</div>
  </div>
);

export default Card;
