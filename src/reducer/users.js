import { SET_USER_NAME,  
  SET_USER_MAIL, 
  SET_USER_PASSWORD,  
  SET_USER_DESCRIPTION, 
  SET_USER_PROFIL, 
  CLEAR_LOGIN_FORM,  
  AUTHORIZE_LOG_IN,
  CHANGE_FIELD,
  LOG_OUT,
  SAVE_USER_INFO,
  UNAUTHORIZED_LOG,
  SET_MESSAGE_ERROR_HOME,
  SET_LOGIN_VISIBILITY,
  GET_RESPONSIVE_ON,
  GET_RESPONSIVE_OFF,
  CLEAR_EDIT_FORM,
  UPDATE_USER_NAME
} from'../actions/users';


/* TODO: AJOUTER UN UTILISATEUR */

const initialtate = {
    id:"",
    username:"",
    newUserName: "",
    email: "",
    password: "",
    picture: "",
    description: "",
    profil: "",
    loginIsVisible: true,
    isLogged: false,
    login:'',
    passwordLogin:'',
    seeAllProjects:false,
    myProjects:[],
    messageLog:'',
    errorMessageBox:false,
    isResponsive: false
};

export default (state = initialtate, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_VISIBILITY:
      return{
        ...state,
        messageLog:'',
        loginIsVisible:action.bool
      }
    case SET_MESSAGE_ERROR_HOME:
      return{
        ...state,
        loginIsVisible:true,
        errorMessageBox:true,
        messageLog:action.message,
      }
    case UNAUTHORIZED_LOG:
      return{
        ...state,
        messageLog:'Login ou mot de passe incorrect',
      }
    case SET_USER_NAME:
      return {
        ...state,
        username: action.newUserName,
      };
    case UPDATE_USER_NAME:
      return {
        ...state,
        newUserName: action.updatedUserName,
      };
      case SET_USER_MAIL:
      return {
        ...state,
        email: action.newUserMail,
      };
      case SET_USER_PASSWORD:
      return {
        ...state,
        password: action.newUserPassword,
      };
      case SET_USER_DESCRIPTION:
      return {
        ...state,
        description: action.newUserDescription,
      };
      case SET_USER_PROFIL:
      return {
        ...state,
        profil: action.newUserProfil,
      };
      case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]:action.newValue
      };
      case LOG_OUT:
        return{
          ...initialtate,
        }
      case CLEAR_LOGIN_FORM :
      return {
        ...state,
        login:'',
        password:'',
        
        
      };
      case CLEAR_EDIT_FORM:
        return{
          ...state,
          password:'',
        }
      case AUTHORIZE_LOG_IN:
        return{
          ...state,
          isLogged:true,
          username:action.username,
          id:action.id,
          token:action.token,
          picture:action.picture,
      }
      case SAVE_USER_INFO:
        // console.log(action.userInfo)
        return{
          ...state,
          username:action.userInfo.username,
          email: action.userInfo.email,
          picture:action.userInfo.picture,
          description:action.userInfo.description,
          profil: action.userInfo.profil,
          myProjects:action.userInfo.projects,
          newUserName:action.userInfo.username
              
          }
      case GET_RESPONSIVE_ON:
        return{
          ...state,
          isResponsive: true
        }
      case GET_RESPONSIVE_OFF:
        return{
          ...state,
          isResponsive: false
        }
        
    default:
    return state;
  }
};