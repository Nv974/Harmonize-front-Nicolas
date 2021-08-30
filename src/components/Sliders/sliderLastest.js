import React from 'react';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import ProjectCard from '../../containers/ProjectCard';


import './sliderlast.scss';




const SliderLastest = ({listToDisplay}) => {
    let count = 0
    
    const nextSlide = () => {
        const images = document.querySelectorAll('.sliderlast__card');
        const nbSlides = images.length;
        images[count].classList.remove('sliderlast__card--active');
        count < nbSlides -1? count++ : count=0
        images[count].classList.add('sliderlast__card--active');
    }

    const previousSlide = () => {
        const images = document.querySelectorAll('.sliderlast__card');
        const nbSlides = images.length;
        images[count].classList.remove('sliderlast__card--active');
        count > 0 ? count-- : count = nbSlides -1
        images[count].classList.add('sliderlast__card--active');
    }
    return(
        <div className="sliderlast">
            
            <div className="sliderlast__chevron sliderlast__chevron--left" onClick={previousSlide} > <FontAwesomeIcon icon={faChevronLeft} /> </div>
            {listToDisplay.map((project)=> <div className ="sliderlast__card sliderlast__card--active" > <ProjectCard key={'home_needest'+project.id} {...project} /></div>).slice(0,1)}
            {listToDisplay.map((project)=> <div className ="sliderlast__card" > <ProjectCard key={'home_needest'+project.id} {...project} /></div>).slice(2,5)}           
            <div className="sliderlast__chevron sliderlast__chevron--right" onClick={nextSlide} > <FontAwesomeIcon icon={faChevronRight} /> </div>
        </div>
    )
  
};

SliderLastest.propTypes = {
    listToDisplay: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired}
    )

    ),
}

export default SliderLastest;
