import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Link to={`/profile/${_id}`} className='profile bg-light profile-card'>
      <img src={avatar} alt='avatar' className='round-img' />
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>{location}</span>}</p>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default ProfileItem;
