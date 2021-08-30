// action type CLOSE_POP_UP
export const CLOSE_POP_UP = 'CLOSE_POP_UP';
 
// action creator closePopUp
export const closePopUp = () => ({
  type: CLOSE_POP_UP,
});
// action type OPEN_POP_UP
export const OPEN_POP_UP = 'OPEN_POP_UP';
 
// action creator 
export const openPopUp = (style,message,title) => ({
  type: OPEN_POP_UP,style,message,title
});
// action type UPLOAD_SPINNER
export const UPLOAD_SPINNER = 'UPLOAD_SPINNER';
 
// action creator uploadSpinner
export const uploadSpinner = (value) => ({
  type: UPLOAD_SPINNER,value
});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});