/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import PageLayout from '../components/layout/pageLayout';
import PageHeading from '../components/pageHeading';

// Typescript declarations
interface PageNotFoundProps {
  location: {
    origin: string;
    pathname: string;
  };
}

const PageNotFound = ({ location }: PageNotFoundProps): ReactElement => {
  const { origin, pathname } = location;

  return (
    <div>
      <Helmet
        title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
        meta={[
          { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
          { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
        ]}
      />
      <PageLayout>
        <PageHeading headingText='This Page Could Not be Found' />
        <p className='my-8'>The page <code>{pathname}</code> does not exist on <Link className='link' to='/'>{origin}</Link>.</p>
        <p className='my-8'>Please head back to the <Link className='link' to='/'>home page</Link> or use the navigation menu to explore the available pages on this site.</p>
      </PageLayout>
    </div>
  );
};

export default PageNotFound;
