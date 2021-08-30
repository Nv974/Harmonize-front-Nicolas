import React from 'react';

import './mentions.scss';

const Mentions = () => (
  <div className="mentions">
    <div className="mentions__block">
      <h1>Mentions légales</h1>
      <h4>Pour la protection de vos oeuvres Harmonize vous conseille l'utilisation des Créative Commons</h4>
      <p>
        Les licences de droits d’auteur et les outils Creative Commons apportent un équilibre à l’intérieur du cadre traditionnel “tous droits réservés” créé par les lois sur le droit d’auteur. 
      </p>
      <p>  
        Nos outils donnent à tout le monde, du créateur individuel aux grandes entreprises et aux institutions publiques, des moyens simples standardisés d’accorder des permissions de droits d’auteur supplémentaires à leurs œuvres. 
      </p>
      <p>
        La combinaison de nos outils et de nos utilisateurs est un fonds commun numérique vaste et en expansion, un espace commun de contenus pouvant être copiés, 
        distribués, modifiés, remixés, et adaptés, le tout dans le cadre des lois sur le droit d’auteur.
      </p>
      <a href="https://creativecommons.org/licenses/?lang=fr-FR">Creative Commons</a>
    </div>
  </div>
);

export default Mentions;