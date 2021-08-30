// action type SET_USER_COMMENT
export const SET_USER_COMMENT = 'SET_USER_COMMENT';

// action creator setUsecomment
export const setUserComment = (value) => ({
  type: SET_USER_COMMENT,
  newUserComment: value
});


// action type SAVE_USER_COMMENT
export const SAVE_USER_COMMENT = 'SAVE_USER_COMMENT';

// action creator saveUserComment
export const saveUserComment = (commentData) => ({
  type: SAVE_USER_COMMENT,
  commentData
});

export const CLEAR_USER_COMMENT = 'CLEAR_USER_COMMENT';

export const clearUserComment = (id) => {
  // console.log(id);
return({
  type: CLEAR_USER_COMMENT, id
});}

// action type UPLOAD_AUDIO
export const UPLOAD_AUDIO = 'UPLOAD_AUDIO';
 
// action creator 
export const uploadAudio = (audio) => ({
  type: UPLOAD_AUDIO,audio
});

// action type DELETE_USER_COMMENT
export const DELETE_USER_COMMENT = 'DELETE_USER_COMMENT';

// action creator deleteUserComment
export const deleteUserComment = (commentId) => ({
  type: DELETE_USER_COMMENT,
  commentId : commentId
});
// action type CLEAR_COMMENT
export const CLEAR_COMMENT = 'CLEAR_COMMENT';
 
// action creator clearComment
export const clearComment = () => ({
  type: CLEAR_COMMENT,
});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});