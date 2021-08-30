import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/messages'

import SendedMessages from '../../components/Messages/SendedMessages';

const mapStateToProps = (state, ownProps) =>({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMessage : (id) => {
        dispatch(deleteMessage(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SendedMessages);
