import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentForm';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch]);
  const { post, loading } = useSelector((state) => state.post);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn btn-primary mb-2'>
        All Posts
      </Link>
      <PostItem key={post._id} post={post} showActions={false} />
      <CommentForm postId={post._id} />
    </Fragment>
  );
};

export default Post;
