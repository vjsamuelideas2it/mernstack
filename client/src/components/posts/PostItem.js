import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  if (auth.user) {
    var postLiked = likes.some((like) => {
      if (like.user === auth.user._id) {
        return true;
      }
      return false;
    });
  }

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/post/${_id}`} href='profile.html'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>
        <button
          onClick={(e) =>
            postLiked ? dispatch(removeLike(_id)) : dispatch(addLike(_id))
          }
          type='button'
          className='btn btn-light'
        >
          <i
            className={`fas fa-thumbs-up ${postLiked && 'liked-post-thumb'}`}
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
