import './player.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const Player = ({songToPlay,setPlaying,isPlaying,nameSongToPlay,nameUserSongToPlay}) => {
    const [stateVolume, setStateVolume] = useState(0.5);
    const [stateDuration, setStateDuration] = useState(0);
    
    useEffect(()=>{
        const track = document.querySelector('audio');
        if(isPlaying) {
            showPlayer();  
            track.play();
        }
        else{
            track.pause();
        }
    },[isPlaying,songToPlay])
    
    useEffect(()=> {
        setVolume(stateVolume)
    },[stateVolume])

    useEffect(()=> {
        setDuration(stateDuration)
    },[stateDuration])


    const setVolume = (event) =>{
        const track = document.querySelector('audio');
        track.volume = event;
    }

    const setDuration = (event) =>{
        const track = document.querySelector('audio');
        track.currentTime = event;        
    }

    


    const showPlayer = () => {
        const player = document.querySelector('.player')
        player.classList.add('hide') 
        const minimizer = document.querySelector('.player__minimize__toggle')
        minimizer.classList.toggle('open')    
    }

    const hidePlayer = () => {
        const player = document.querySelector('.player')
        player.classList.toggle('hide') 
        const minimizer = document.querySelector('.player__minimize__toggle')
        minimizer.classList.toggle('open')
    }

    const timeUpdate = () => {
      const timer = document.querySelector("#timer");
      const track = document.querySelector("audio");
      timer.value = track.currentTime;
      timer.max = track.duration;
      if (track.currentTime === track.duration) {
        setStateDuration(0);
        setPlaying(false);
      }
    };


    return(
    <div className="player">
        <div className="player__infos">
        <div className="player__infos__name"> {nameUserSongToPlay} -&nbsp; </div>
        <div className="player__infos__title"> {nameSongToPlay} </div>  
        </div>
        {isPlaying &&<button onClick={()=> setPlaying(false)} className="player__button" > <FontAwesomeIcon icon={ faPause } /> </button>}
        {!isPlaying &&<button onClick={()=> setPlaying(true)} className="player__button" > <FontAwesomeIcon icon={ faPlay } /> </button>}
        <div className="player__slider">
            <input type="range" min="0" max="100" value={stateDuration}   id='timer' className="player__slider__timer"  onChange={(event =>
            setStateDuration(event.target.value))} />
            <input type="range" min="0"  value={stateVolume*100}  id='volume' className="player__slider__volume" onChange={(event =>
            setStateVolume(event.target.value/100))} />
        <audio src={"http://ec2-3-84-168-178.compute-1.amazonaws.com/audio/"+songToPlay} 
            className="player__controller" 
            preload="auto" 
            onTimeUpdate={timeUpdate} >
        </audio>
        </div>
        <button className="player__minimize" onClick={hidePlayer} > <div className="player__minimize__toggle" > <FontAwesomeIcon icon={ faChevronCircleDown} /> </div></button>
    </div>
    )


};


  

export default Player;