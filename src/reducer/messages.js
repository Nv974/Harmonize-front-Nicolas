import { CHANGE_FIELD,
  GET_RECEIVED_MESSAGES,
  SET_NEW_MESSAGE_VISIBILITY,
  ADD_NEW_MESSAGE,
  GET_MESSAGE_RECIPIENT, 
  DELETE_MESSAGE,
  CLEAR_MESSAGE_FORM,
  LOG_OUT} 
  from '../actions/messages';


const initialtate = {
    messagesList:[],
    title:'',
    recipe:'',
    content:'',
    recipientId : '',
    idToDelete : '' ,
    showReceivedMessages : false,
    showSendedMessages : false,
    newMessageIsVisible:false
};

export default (state = initialtate, action = {}) => {
  switch (action.type) {
    case GET_RECEIVED_MESSAGES:
      return {
        ...state,
        messagesList : action.messagesList
      };
      case DELETE_MESSAGE:
      return {
        ...state,
        idToDelete : action.id
      };
      case CHANGE_FIELD:
          return{
            ...state,
            [action.name]:action.value,
          }
      case ADD_NEW_MESSAGE :
          return {
            ...state,
            content: action.newUserMessage,
          };
      case SET_NEW_MESSAGE_VISIBILITY:
        return{
            ...state,
            newMessageIsVisible:true,
          }
      case GET_MESSAGE_RECIPIENT:
        return{
          ...state,
          recipientId : action.messageRecipient
      }
      case CLEAR_MESSAGE_FORM:
        return{
          ...state,
          title:'',
          recipe:'',
          content:'',
          recipientId : '',
          
        }
        case LOG_OUT: 
        return{
          ...initialtate
        }
    default:
      return state;
  }
};