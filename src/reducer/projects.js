import {
  CHANGE_FIELD,
  GET_PROJECTS_LIST,
  GET_PROJECT,
  SAVE_TEMP_ID,
  LOAD_INFO_TO_UPDATE,
  GET_PROJECTS_ORDER,
  GET_GENRE_SELECTED,
  GET_FILTER_GENRE,
  DELETE_USER_PROJECT,
  CLEAR_PROJECT_FORM,
  GET_GENRE_LIST,
  GET_HOTTEST_PROJECT,
  LOG_OUT,
} from "../actions/projects";

const initialtate = {
  list: [],
  loading: true,
  newProjectName: "",
  newProjectPicture: "",
  newProjectGenre: "",
  newProjectAudio: "",
  newProjectAudioExt: "",
  newProjectDescription: "",
  projectToDisplay: "",
  tempId: null,
  projectsOrder: "date/DESC",
  nameToUpdate: "",
  updateDescription: "",
  updateGenre: "",
  genreSelected: "null",
  isFiltered: false,
  genreList: [],
  tempSlug: null,
  hottestList: [],
};

export default (state = initialtate, action = {}) => {
  switch (action.type) {
    case GET_PROJECTS_LIST:
      return {
        ...state,
        list: action.projectsList,
        loading: false,
      };
    case GET_GENRE_LIST:
      return {
        ...state,
        genreList: action.list,
      };
    case GET_HOTTEST_PROJECT:
      return {
        ...state,
        hottestList: action.hottestList,
      };
    case CLEAR_PROJECT_FORM:
      return {
        ...state,
        newProjectName: "",
        newProjectPicture: "",
        newProjectGenre: "",
        newProjectAudio: "",
        newProjectAudioExt: "",
        newProjectDescription: "",
        tempId: null,
        tempSlug: action.tempSlug,
      };

    case GET_PROJECTS_ORDER:
      return {
        ...state,
        projectsOrder: action.order,
      };
    case LOAD_INFO_TO_UPDATE:
      return {
        ...state,
        nameToUpdate: action.name,
        updateDescription: action.description,
        updateGenre: action.genre,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case GET_PROJECT:
      return {
        ...state,
        projectToDisplay: action.project,
        tempSlug: action.tempSlug,
      };
    case SAVE_TEMP_ID:
      return {
        ...state,
        tempId: action.tempId,
      };
    case GET_GENRE_SELECTED:
      return {
        ...state,
        genreSelected: action.genreSelected,
      };
    case GET_FILTER_GENRE:
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    case DELETE_USER_PROJECT:
      return {
        ...state,
      };
    case LOG_OUT:
      return {
        ...initialtate,
        projectToDisplay: state.projectToDisplay,
        list: state.list,
        hottestList: state.hottestList,
        genreList: state.genreList,
      };
    default:
      return state;
  }
};
