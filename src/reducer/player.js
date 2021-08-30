import {PLAY_THIS_SONG,SET_PLAYING} from '../actions/player';

const initialtate = {
    songToPlay:null,
    nameSongToPlay:'',
    nameUserSongToPlay:'',
    isPlaying:false,

  
};

export default (state = initialtate, action = {}) => {
  switch (action.type) {
    case PLAY_THIS_SONG:
        return{
          ...state,
          songToPlay: action.audio_url,
          nameSongToPlay:action.projectName,
          nameUserSongToPlay:action.userName,
          isPlaying: true,
         
        }
        case SET_PLAYING:
            return{
                ...state,
                isPlaying:action.playBool,
            }
    default:
      return state;
  }
};