// action type GET_MESSAGES_LIST
export const GET_MESSAGES_LIST = 'GET_MESSAGES_LIST';
 
// action creator getMessagesList
export const getMessagesList = () => ({
  type: GET_MESSAGES_LIST,
});

// action type CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';
 
// action creator changeField
export const changeField = (value,name) => ({
  type: CHANGE_FIELD,value,name,
  newUserMessage: value
});

// TODO créé action newMessageIsVisible
// action type SET_NEW_MESSAGE_VISIBILITY
export const SET_NEW_MESSAGE_VISIBILITY = 'SET_NEW_MESSAGE_VISIBILITY';
 
// action creator setNewMessageVisibility
export const setNewMessageVisibility = () => ({
  type: SET_NEW_MESSAGE_VISIBILITY,
});

export const LOAD_MESSAGES_FROM_API = 'LOAD_MESSAGES_FROM_API';
 
export const loadMessagesFromApi = () => ({
  type: LOAD_MESSAGES_FROM_API,
  
});

// action type ADD_NEW_MESSAGE
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

// action creator addNewMessage
export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

// action type GET_MESSAGE_RECIPIENT
export const GET_MESSAGE_RECIPIENT = 'GET_MESSAGE_RECIPIENT';

// action creator getMessageRecipient
export const getMessageRecipient = (value) => ({
  type: GET_MESSAGE_RECIPIENT,
  messageRecipient : value
});

// action type GET_RECEIVED_MESSAGES
export const GET_RECEIVED_MESSAGES = 'GET_RECEIVED_MESSAGES';

// action creator getReceivedMessages
export const getReceivedMessages = (value) => ({
  type: GET_RECEIVED_MESSAGES,
  messagesList : value
});

// action type DELETE_RECEIVED_MESSAGES 
export const DELETE_MESSAGE  = 'DELETE_MESSAGE';

// action creator 
export const deleteMessage = (id) => { 
  return({
  type: DELETE_MESSAGE  ,
  id : id
})};

// action type MESSAGE_IS_READ
export const MESSAGE_IS_READ = 'MESSAGE_IS_READ';
 
// action creator messageIsRead
export const messageIsRead = (bool,id) => ({
  type: MESSAGE_IS_READ,bool,id
});
// action type CLEAR_MESSAGE_FORM
export const CLEAR_MESSAGE_FORM = 'CLEAR_MESSAGE_FORM';
 
// action creator clearMessageForm
export const clearMessageForm = () => ({
  type: CLEAR_MESSAGE_FORM,
});
// action type LOG_OUT
export const LOG_OUT = 'LOG_OUT';
 
// action creator logOut
export const logOut = () => ({
  type: LOG_OUT,
});