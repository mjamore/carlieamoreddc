import React, { ReactElement } from 'react';

// Typescript declarations
interface PageHeadingProps {
  headingText: String;
}

const PageHeading = ({ headingText }: PageHeadingProps): ReactElement => (
  <h1 className='my-12 text-3xl text-center'>{headingText}</h1>
);

export default PageHeading;
