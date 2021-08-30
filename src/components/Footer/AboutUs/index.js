import React from 'react';

import './aboutus.scss';
import avatarPA from '../../../assets/img/avataars/avataaarsPA.png';
import avatarNicolas from '../../../assets/img/avataars/avataaarsNicolas.png';
import avatarJB from '../../../assets/img/avataars/avataaarsJB.png';
import avatarLaura from '../../../assets/img/avataars/avataaarsLaura.png';
import avatarJacques from '../../../assets/img/avataars/avataaarsJacques.png';
import Card from './Card'

const AboutUs = () => (
  <div className="aboutus">
    <Card name={"Nicolas"} picture={avatarNicolas} role={"Product Owner"} techno={"React"} />
    <Card name={"Pierre-Alexandre"} picture={avatarPA} role={"Scrum Master"} techno={"Symfony"} />
    <Card name={"Jean-Baptiste"} picture={avatarJB} role={"Lead Dev Front"} techno={"React"} />
    <Card name={"Laura"} picture={avatarLaura} role={"Lead Dev Back"} techno={"Symfony"} />
    <Card name={"Jacques"} picture={avatarJacques} role={"Référent technique Git"} techno={"Symfony"} />
  </div>
);

export default AboutUs;
