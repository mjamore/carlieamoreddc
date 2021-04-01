import React, { ReactElement } from 'react';

const RequiredFieldErrorMessage = (): ReactElement => (
  <span className='text-red-800 text-xs'>This field is required</span>
);

export default RequiredFieldErrorMessage;
