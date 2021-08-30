import React from 'react';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import ProjectCard from '../../containers/ProjectCard';


import './sliderhot.scss';




const SliderHottest = ({listToDisplay}) => {
    let count = 0

    const nextSlide = () => {
        const images = document.querySelectorAll('.sliderhot__card');
        const nbSlides = images.length;
        images[count].classList.remove('sliderhot__card--active');
        count < nbSlides -1? count++ : count=0
        images[count].classList.add('sliderhot__card--active');
    }

    const previousSlide = () => {
        const images = document.querySelectorAll('.sliderhot__card');
        const nbSlides = images.length;
        images[count].classList.remove('sliderhot__card--active');
        count > 0 ? count-- : count = nbSlides -1
        images[count].classList.add('sliderhot__card--active');
    }
    return(
        <div className="sliderhot">
            
            <div className="sliderhot__chevron sliderhot__chevron--left" onClick={previousSlide} > <FontAwesomeIcon icon={faChevronLeft} /> </div>
            {listToDisplay.map((project)=> <div className ="sliderhot__card sliderhot__card--active" > <ProjectCard key={'home_needest'+project.id} {...project} /></div>).slice(0,1)}
            {listToDisplay.map((project)=> <div className ="sliderhot__card" > <ProjectCard key={'home_needest'+project.id} {...project} /></div>).slice(2,5)}           
            <div className="sliderhot__chevron sliderhot__chevron--right" onClick={nextSlide} > <FontAwesomeIcon icon={faChevronRight} /> </div>
        </div>
    )
  
};

SliderHottest.propTypes = {
    listToDisplay: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired}
    )

    ),
}

export default SliderHottest;
