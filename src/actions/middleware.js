//Réunir toute les actions lié au middleware
// action type SEND_CONTACT_MESSAGE
export const SEND_CONTACT_MESSAGE = 'SEND_CONTACT_MESSAGE';
 
// action creator sendContactMessage
export const sendContactMessage = (name,mail,message) => ({
  type: SEND_CONTACT_MESSAGE,name,mail,message
});