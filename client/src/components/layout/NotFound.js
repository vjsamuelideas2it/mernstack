import { Fragment } from 'react';

const NotFound = () => {
  return (
    <div className='container page-not-found'>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page not Found
      </h1>
      <p className='large'>Sorry this page does not exist</p>
    </div>
  );
};

export default NotFound;
