// action type GET_ARTISTS_LIST
export const GET_ARTISTS_LIST = 'GET_ARTISTS_LIST';

// action creator getArtistsList
export const getArtistsList = (artistsList) => ({
  type: GET_ARTISTS_LIST, artistsList
});
// action type GET_ARTISTS_LIST
export const GET_ARTIST = 'GET_ARTIST';

// action creator getArtist
export const getArtist = (artist) => ({
  type: GET_ARTIST, artist
});

// action type LOAD_PROJECTS_FROM_API
export const LOAD_ARTISTS_FROM_API = 'LOAD_ARTISTS_FROM_API';
 
// action creator loadProjectFromAPI
export const loadArtistsFromAPI = () => ({
  type: LOAD_ARTISTS_FROM_API,
  
});

// action type LOAD_ARTIST_FROM_API
export const LOAD_ARTIST_FROM_API = 'LOAD_ARTIST_FROM_API';
 
// action creator loadArtist
export const loadArtist = (id) => ({
  type: LOAD_ARTIST_FROM_API, id
});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});