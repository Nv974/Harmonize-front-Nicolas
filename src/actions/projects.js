// action type GET_PROJECTS_LIST
export const GET_PROJECTS_LIST = 'GET_PROJECTS_LIST';
 
// action creator getProjectsList
export const getProjectsList = (projectsList) => ({
  type: GET_PROJECTS_LIST, projectsList
});
// action type GET_PROJECT to display
export const GET_PROJECT = 'GET_PROJECT';
 
// action creator getProjects
export const getProject = (project) => ({
  type: GET_PROJECT, project
});
// action type CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';
 
// action creator changeField
export const changeField = (fieldValue,fieldName) => ({
  type: CHANGE_FIELD,fieldValue,fieldName
});
// action type SAVE_TEMP_ID
export const SAVE_TEMP_ID = 'SAVE_TEMP_ID';
 
// action creator saveTempId
export const saveTempId = (tempId) => ({
  type: SAVE_TEMP_ID,tempId
});
// action type GET_HOTTEST_PROJECT
export const GET_HOTTEST_PROJECT = 'GET_HOTTEST_PROJECT';
 
// action creator getHottestProject
export const getHottestProject = (hottestList) => ({
  type: GET_HOTTEST_PROJECT,hottestList
});

//--------------------------------------------------------------
// ACTION FOR MIDDLEWARE
// action type LOAD_PROJECTS_FROM_API
export const LOAD_PROJECTS_FROM_API = 'LOAD_PROJECTS_FROM_API';
 
// action creator loadProjectFromAPI
export const loadProjectsFromAPI = () => ({
  type: LOAD_PROJECTS_FROM_API,
});

// action type SUBMIT_NEW_PROJECT
export const CREATE_PROJECT = 'CREATE_PROJECT';
 
// action creator submitNewProject
export const createProject = () => ({
  type: CREATE_PROJECT,
});

// action type LOAD_PROJECT 1 seul projet recherché en API via MiddleWare
export const LOAD_PROJECT_FROM_API = 'LOAD_PROJECT_FROM_API';
 
// action creator loadProject
export const loadProject = (id) => {
    return({
  type: LOAD_PROJECT_FROM_API, id
})};

// action type UPLOAD_FILES
export const UPLOAD_FILES = 'UPLOAD_FILES';
 
// action creator uploadFiles
export const uploadFiles = (audio,picture) => ({
  type: UPLOAD_FILES,audio,picture,
});


// action type GET_PROJECTS_ORDER
export const GET_PROJECTS_ORDER = 'GET_PROJECTS_ORDER';

// action creator getProjectsOrder
export const getProjectsOrder = (order) => {
  // console.log("action " + order);
  return({
  type: GET_PROJECTS_ORDER,
  order : order
});}


// action type EDIT_PROJECT
export const EDIT_PROJECT = 'EDIT_PROJECT';
 
// action creator editProject
export const editProject = () => ({
  type: EDIT_PROJECT,
});

// action type LOAD_INFO_TO_UPDATE
export const LOAD_INFO_TO_UPDATE = 'LOAD_INFO_TO_UPDATE';
 
// action creator loadInfoToUpdate
export const loadInfoToUpdate = (name,description,genre) => ({
  type: LOAD_INFO_TO_UPDATE,name,description,genre,
});

// action type GET_GENRE_ID
export const GET_GENRE_SELECTED = 'GET_GENRE_SELECTED';

// action creator 
export const getGenreSelected = (genreValue) => ({
  type: GET_GENRE_SELECTED ,
  genreSelected : genreValue
});

// action type GET_FILTER_GENRE
export const GET_FILTER_GENRE = 'GET_FILTER_GENRE';

// action creator getFilterGenre
export const getFilterGenre = () => ({
  type: GET_FILTER_GENRE,
});

// action type DELETE_USER_PROJECT
export const DELETE_USER_PROJECT = 'DELETE_USER_PROJECT';

// action creator deleteUserProject
export const deleteUserProject = () => ({
  type: DELETE_USER_PROJECT,
});

// action type CLEAR_PROJECT_FORM
export const CLEAR_PROJECT_FORM = 'CLEAR_PROJECT_FORM';
 
// action creator clearProjectForm
export const clearProjectForm = (tempSlug) => ({
  type: CLEAR_PROJECT_FORM,tempSlug
});
// action type LOAD_GENRE_FROM_API
export const LOAD_GENRE_FROM_API = 'LOAD_GENRE_FROM_API';
 
// action creator loadGenreFromAPI
export const loadGenreFromAPI = () => ({
  type: LOAD_GENRE_FROM_API,
});
// action type GET_GENRE_LIST
export const GET_GENRE_LIST = 'GET_GENRE_LIST';
 
// action creator getGenreList
export const getGenreList = (list) => ({
  type: GET_GENRE_LIST,list
});

// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});