import { connect } from 'react-redux';
import {setNewMessageVisibility , loadMessagesFromApi} from '../../actions/messages';


import Messages from '../../components/Messages';

    const mapStateToProps = (state) =>{ 
    return({
    messagesList : state.messages.messagesList,
    newMessageIsVisible: state.messages.newMessageIsVisible,
    userId : state.users.id
    })}
    const mapDispatchToProps = (dispatch) =>({
        setNewMessageVisibility:()=> {
    dispatch(setNewMessageVisibility())
    },
    loadMessagesFromApi:()=> {
        dispatch(loadMessagesFromApi())
        },
    })

export default connect(mapStateToProps,mapDispatchToProps)(Messages);