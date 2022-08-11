import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <div className='post bg-white p-1 my-1'>
      <div className='row'>
        <div className='col-6 col-md-3 col-lg-2'>
          <div className='d-flex my-1'>
            <img className='round-img' src={avatar} alt='' />
            <Link to={`/profile/${user}`} className='post-author'>
              {name}
            </Link>
          </div>
        </div>
        <div className='col-6 col-md-9 col-lg-10'>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Commented on <Moment format='DD/MM/YYYY'>{date}</Moment>
          </p>
        </div>
        <div className='col-2 center-profile-item'>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => dispatch(deleteComment(postId, _id))}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times'></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
