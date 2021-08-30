import React from 'react';

import './comments.scss';
import Comment from '../../../containers/Comment'
import NewComment from '../../../containers/NewComment'

const Comments = ({comments,token,playThisSong,project,userId}) => {
 
  return(
    <div className="comments">
      <h2 class="comments__title">Commentaires</h2>

      
      {comments.map((comment) => <Comment playThisSong={playThisSong} projectUserId={project.user.id} projectName={project.name} commentUserId={comment.user.id} key={comment.id} commentId={comment.id} {...comment} userId={userId}  />)}
         
      {token && <NewComment />}
    </div>
  )
  
};

export default Comments;
