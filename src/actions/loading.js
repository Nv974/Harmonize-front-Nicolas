
// action type SET_LOADING
export const SET_LOADING = 'SET_LOADING';
 
// action creator setLoadingHome
export const setLoading = (value,name) => ({
  type: SET_LOADING,   value,name});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});