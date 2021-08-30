import React from 'react';
import ArtistCard from '../ArtistCard';
import Loading from '../Loading';


import './artists.scss';


const Artists = ({artistsList,artistsIsLoading}) => {
   
    return (
        <div className="artists">
            <div className="artists__header">
                <h2 className="artists__header__title">Les Artistes</h2>
            </div>
            {artistsIsLoading && <Loading />}
            {!artistsIsLoading &&<div className="artists__list">
            {artistsList.map((artist)=>{ 
              return ( < div key={'artistList'+artist.id} className="artists__list__card"> 
                    <ArtistCard {...artist} />
                </div>)})} 
            </div>}
        </div>
    )
};

export default Artists;
