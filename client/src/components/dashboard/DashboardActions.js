import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';

const DashboardActions = () => {
  const userId = useSelector((state) => state.profile.profile.user._id);
  const dispatch = useDispatch();

  return (
    <div className='dash-buttons-group'>
      <Link to={`/profile/${userId}`} className='btn btn-dark'>
        <i className='fas fa-user text-primary'></i> View Profile
      </Link>
      <Link to='/edit-profile' className='btn btn-dark'>
        <i className='fas fa-edit text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-dark'>
        <i className='fab fa-black-tie text-primary'></i> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-dark'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Education
      </Link>
      <button
        className='btn btn-danger'
        onClick={() => {
          dispatch(deleteAccount());
        }}
      >
        <i className='fas fa-user-minus'></i> Delete My Account
      </button>
    </div>
  );
};

export default DashboardActions;
