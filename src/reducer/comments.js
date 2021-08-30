import { SET_USER_COMMENT, SAVE_USER_COMMENT, CLEAR_USER_COMMENT,CLEAR_COMMENT, LOG_OUT } from '../actions/comments'



const initialState = {
    list: [],
    content: '',
    choiceUpload:false, 
    tempId:null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_COMMENT :
      return {
        ...state,
        content: action.newUserComment,
      };
      case SAVE_USER_COMMENT :
      return {
        ...state,
        content: action.newUserComment,
      };
      case CLEAR_USER_COMMENT :
      return {
        ...state,
        content: '',
        tempId:action.id,
        choiceUpload:true,
      };
      case CLEAR_COMMENT:
        return{
          ...state,
          content: '',
          choiceUpload:false, 
          tempId:null,
        }
        case LOG_OUT:
          return{
            ...initialState,
          }
    default:
      return state;
  }
};