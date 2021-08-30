// action type PLAY_THIS_SONG
export const PLAY_THIS_SONG = 'PLAY_THIS_SONG';
 
// action creator songToPlay
export const playThisSong = (audio_url,userName,projectName) => ({
  type: PLAY_THIS_SONG,audio_url,userName,projectName
});
// action type SET_PLAYING
export const SET_PLAYING = 'SET_PLAYING';
 
// action creator setPlaying
export const setPlaying = (playBool) => ({
  type: SET_PLAYING,playBool
});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});