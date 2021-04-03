import React, { ReactElement } from 'react';

// Typescript declarations
interface PageHeadingProps {
  headingText: String;
}

const PageHeading = ({ headingText }: PageHeadingProps): ReactElement => (
  <div className='text-center'>
    <div className='inline-block'>
      <h1 className='my-12 page-heading relative text-center'>{headingText}</h1>
    </div>
  </div>
);

export default PageHeading;
