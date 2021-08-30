import { connect } from 'react-redux';

import { setUserComment, saveUserComment ,uploadAudio,clearComment} from '../../actions/comments'
import {openPopUp, uploadSpinner} from '../../actions/popup';
import { loadProject } from '../../actions/projects';

import NewComment from '../../components/Project/Comments/NewComment'

const mapStateToProps = (state, ownProps) => ({
    userComment : state.comments.content,
    choiceUpload:state.comments.choiceUpload,
    projectToDisplay:state.projects.projectToDisplay,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    setNewComment: (newComment) => {
        dispatch(setUserComment(newComment));
      },

      addComment : () => {
          dispatch(saveUserComment())
      },
      uploadAudio : (audio) =>{
          dispatch(uploadAudio(audio))
      },
      uploadSpinner:(value) =>{
        dispatch(uploadSpinner(value))
    },
    clearComment:()=>{
        dispatch(clearComment())
    },
    loadProject:(id)=>{
        dispatch(loadProject(id))
    },
    openPopUp:(type,content,title)=>{
        dispatch(openPopUp(type,content,title))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
