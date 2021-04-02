/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import PageLayout from '../components/layout/pageLayout';
import PageHeading from '../components/pageHeading';

const PageNotFound = (): ReactElement => (
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
      <p className='my-12'>Please head back to the <Link className='link' to='/'>home page</Link> and use the navigation menu to explore the available pages on this site.</p>
    </PageLayout>
  </div>
);

export default PageNotFound;
