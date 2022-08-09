import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isPostLiked, setPostLiked] = useState(false);

  useEffect(() => {
    let postLiked = null;
    if (auth && auth.user) {
      postLiked = likes.some((like) => {
        if (like.user === auth.user._id) {
          return true;
        }
        return false;
      });
    }
    setPostLiked(postLiked);
  }, [auth.loading, setPostLiked]);

  return (
    <div className='post bg-white'>
      <Link to={`/post/${_id}`} href='profile.html'>
        <div className='d-flex'>
          <img className='round-img col-6' src={avatar} alt='' />
          <p className='col-6 post-author-alignment'>{name}</p>
        </div>
      </Link>
      <div>
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>
        <p className='my-1'>{text}</p>
        <button
          onClick={(e) => {
            isPostLiked ? dispatch(removeLike(_id)) : dispatch(addLike(_id));
            setPostLiked(!isPostLiked);
          }}
          type='button'
          className='btn btn-light'
        >
          <i
            className={`fas fa-thumbs-up ${isPostLiked && 'liked-post-thumb'}`}
          ></i>
          {likes.length > 0 && <span> {likes.length}</span>}
        </button>
        <a className='btn btn-primary'>
          Discussion
          {comments.length > 0 && (
            <span className='comment-count'> {comments.length}</span>
          )}
        </a>
        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
