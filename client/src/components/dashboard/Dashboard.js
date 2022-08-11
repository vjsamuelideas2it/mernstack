import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';
import empty from '../../assets/images/empty.gif';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <h1 className='large text-primary'>Hey, {user && user.name}</h1>
          <br></br>
          <DashboardActions />
          <div className='dashboard-container'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <Experience experience={profile.experience} />
              </div>
              <div className='col-12 col-lg-6'>
                <Education education={profile.education} />
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className='empty-here'>
          <h1 className='text-primary'>
            <i className='fas fa-exclamation-triangle'></i>
            <br></br>
            <span>It's empty here</span>
          </h1>
          <img src={empty} alt='scooter' className='empty-image' />
          <br />
          <Link to='/create-profile' className='btn btn-dark my-1'>
            Create a Profile
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
