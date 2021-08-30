import { connect } from 'react-redux';
import { addNewMessage, changeField, getMessageRecipient} from '../../actions/messages';

import NewMessage from '../../components/Messages/NewMessage';

const mapStateToProps = (state) => ({
title : state.messages.title,
recipe : state.messages.recipe,
content : state.messages.content,
artistsList : state.artists.list
})
const mapDispatchToProps = (dispatch) =>({
changeField:(value,name)=> {
dispatch(changeField(value,name))
},

newMessage: () => {
    dispatch(addNewMessage())
},
setMessageRecipient: (messageRecipient) => {
    dispatch(getMessageRecipient(messageRecipient))
}
})

export default connect(mapStateToProps,mapDispatchToProps)(NewMessage);