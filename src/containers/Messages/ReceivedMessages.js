import { connect } from 'react-redux';
import { deleteMessage,messageIsRead } from '../../actions/messages'

import ReceivedMessages from '../../components/Messages/ReceivedMessages';

const mapStateToProps = (state, ownProps) =>({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMessage : (id) => {
        dispatch(deleteMessage(id))
    },
    messageIsRead: (bool,id) =>{
        dispatch(messageIsRead(bool,id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceivedMessages);
