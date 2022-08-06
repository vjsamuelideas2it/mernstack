import { Fragment } from 'react';
import Moment from 'react-moment';
import remove from '../../assets/images/remove.png';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <img className='img-icon' src={remove} alt='remove' />
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='mt-1'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School / College</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
