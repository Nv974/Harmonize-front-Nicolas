import { connect } from 'react-redux';
import {deleteUserComment} from '../../actions/comments';



import Comment from '../../components/Project/Comments/Comment';

const mapStateToProps = (state, ownProps) => ({
    token:state.users.token,
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteComment : (commentId) => {
        dispatch(deleteUserComment(commentId))
    },
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
