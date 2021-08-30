import {CLOSE_POP_UP,LOG_OUT,OPEN_POP_UP, UPLOAD_SPINNER} from '../actions/popup';

const initialtate = {
    isOpen : "close",
    style: '',
    message: '',
    title: '',
    isLoading:"",
};
export default (state = initialtate, action = {}) => {
  switch (action.type) {
    case UPLOAD_SPINNER:
      return{
        ...state,
        isOpen:action.value,
        message: "chargement en cours",
        style:'loading',
      }
    case CLOSE_POP_UP:
      return {
        ...state,
        isOpen:"close",
        style: '',
        message: '',
        title: '',
        isLoading:"",

      };
      case OPEN_POP_UP:
          return{
                ...state,
                isOpen : "open",
                style: action.style,
                message: action.message,
                title: action.title,
          }
      case LOG_OUT:
        return{
          ...initialtate
        }
    default:
      return state;
  }
};