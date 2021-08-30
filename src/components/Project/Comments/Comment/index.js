import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

const Comment = ({user,description,created_at,audio_url,playThisSong,projectName, commentUserId, userId, deleteComment, handleDeleteComment, commentId,token}) => {

    const commentDate = new Date(created_at); 
    const day = commentDate.getDate(); 
    const month = commentDate.getMonth() + 1 ; 
    const year = commentDate.getFullYear();
    const hours = commentDate.getHours();
    const minutes = commentDate.getMinutes()
    const dateFr = day + "/" + "0"+month + "/" + year + " à "+ hours +":" + minutes;




    useEffect(() => {
        if (userId === commentUserId) {
            setCommenttIsMine(true);
          } else {
            setCommenttIsMine(false);
          }
        },[token])

        const [commentIsMine, setCommenttIsMine] = useState(false);

        handleDeleteComment = () => {
            deleteComment(commentId);
        }


    return(
        <div className="comment">
            <div className="comment__header">
                <div className="comment__username"> {user.username} </div>
                <div className="comment__date"> le : {dateFr} </div>
            </div>
            <div className="comment__body">
                <div className="comment__content"> {description} </div>
                {audio_url && <button className="card__button__play" onClick={()=>playThisSong(audio_url,user.username,projectName)}><FontAwesomeIcon icon={faPlayCircle} size="2x" /></button>}
            </div>
            {commentIsMine && <button className="comment__delete"><FontAwesomeIcon icon={faTimes} onClick={handleDeleteComment} /></button> }
        </div>
    )
};
Comment.propTypes = {
    user: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
}

export default Comment;
