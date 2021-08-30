export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (value) => ({
  type: SET_USER_NAME,
  newUserName: value
});

export const SET_USER_MAIL = 'SET_USER_MAIL';

export const setUserMail = (value) => ({
  type: SET_USER_MAIL,
  newUserMail: value
});

export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

export const setUserPassword = (value) => ({
  type: SET_USER_PASSWORD,
  newUserPassword: value
});

export const SET_USER_DESCRIPTION = 'SET_USER_DESCRIPTION';

export const setUserDescription = (value) => ({
  type: SET_USER_DESCRIPTION,
  newUserDescription: value
});

export const SET_USER_PROFIL = 'SET_USER_PROFIL';

export const setUserProfil = (value) => ({
  type: SET_USER_PROFIL,
  newUserProfil: value
});

// action type CREATE_USER
export const CREATE_USER = 'CREATE_USER';

// action creator createUser
export const createUser = () => ({
  type: CREATE_USER,
});


export const SAVE_USER = 'SAVE_USER';
 
// action creator getProjectsList
export const saveUser = (userData) => ({
  type: SAVE_USER, 
  userData
});

export const CLEAR_LOGIN_FORM = 'CLEAR_LOGIN_FORM';

// action creator createUser
export const clearLoginForm = () => ({
  type: CLEAR_LOGIN_FORM,
});

// action type UNAUTHORIZED_LOG
export const UNAUTHORIZED_LOG = 'UNAUTHORIZED_LOG';
 
// action creator 
export const  unAuthorizedLog= () => ({
  type: UNAUTHORIZED_LOG,
});
// action type AUTHORIZE_LOG_IN
export const AUTHORIZE_LOG_IN = 'AUTHORIZE_LOG_IN';
 
// action creator aut
export const authorizeLogIn = (id,username,token,picture) => {
return({
  type: AUTHORIZE_LOG_IN,id,username,token,picture
})};
export const CHANGE_FIELD = 'CHANGE_FIELD';
 
// action creator 
export const changeField = (fieldValue,fieldName) => ({
  type: CHANGE_FIELD , newValue:fieldValue, fieldName
});

// action type LOG_IN
export const LOG_IN = 'LOG_IN';
 
// action creator logIn
export const logIn = () => ({
  type: LOG_IN,
});



// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});

// action type SEE_MY_INFOS
export const SEE_MY_INFOS = 'SEE_MY_INFOS';
 
// action creator seeMyINFOS
export const seeMyInfos = () => ({
  type: SEE_MY_INFOS,
});

// action type SAVE_USER_INFO
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
 
// action creator saveUserInfos
export const saveUserInfos = (userInfo) => ({ 
  type: SAVE_USER_INFO,userInfo
});

// action type EDIT_USER
export const EDIT_USER = 'EDIT_USER';
 
// action creator editUser
export const editUser = () => ({
  type: EDIT_USER,
});
// action type UPLOAD_PROFILE_PICTURE
export const UPLOAD_PROFILE_PICTURE = 'UPLOAD_PROFILE_PICTURE';
 
// action creator uploadPROFILE_PICTURE
export const uploadProfilePicture = (picture) => ({
  type: UPLOAD_PROFILE_PICTURE,picture,
});

// action type SET_MESSAGE_ERROR_HOME
export const SET_MESSAGE_ERROR_HOME = 'SET_MESSAGE_ERROR_HOME';
 
// action creator 
export const setMessageErrorHome = (message) => ({
  type: SET_MESSAGE_ERROR_HOME, message
});

// action type SET_LOGIN_VISIBILITY
export const SET_LOGIN_VISIBILITY = 'SET_LOGIN_VISIBILITY';
 
// action creator setLoginVisibility
export const setLoginVisibility = (bool) => ({
  type: SET_LOGIN_VISIBILITY,bool
});

// action type TOGGLE_RESPONSIVE
export const GET_RESPONSIVE_ON = 'GET_RESPONSIVE_ON';

// action creator toggleResponsive
export const getResponsiveOn = () => ({
  type: GET_RESPONSIVE_ON,
});

export const GET_RESPONSIVE_OFF = 'GET_RESPONSIVE_OFF';

// action creator toggleResponsive
export const getResponsiveOff = () => ({
  type: GET_RESPONSIVE_OFF,
});
// action type CLEAR_EDIT_FORM
export const CLEAR_EDIT_FORM = 'CLEAR_EDIT_FORM';
 
// action creator clearEditForm
export const clearEditForm = () => ({
  type: CLEAR_EDIT_FORM,
});

// action type CHANGE_USER_NAME
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

// action creator changeUserName
export const updateUserName = (value) => ({
  type: UPDATE_USER_NAME,
  updatedUserName : value
});