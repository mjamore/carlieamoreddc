import * as React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/pageLayout';
import ServicesProvided from '../components/servicesProvided';
import { pageHeading } from '../components/globalStyles.module.css';

const ServicesPages = () => (
  <div>
    <Helmet
      title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
      meta={[
        { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
        { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
      ]}
    />
    <PageLayout>
      <div className='m-12'>
        <h1 className={pageHeading}>Specialty Services</h1>
        <ServicesProvided />
      </div>
    </PageLayout>
  </div>
);

export default ServicesPages;
