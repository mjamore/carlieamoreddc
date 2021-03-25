import * as React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/pageLayout';
import ContentContainer from '../components/containers/contentContainer';
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
      <ContentContainer>
        <h1 className={pageHeading}>Specialty Services</h1>
        <ServicesProvided />
      </ContentContainer>
    </PageLayout>
  </div>
);

export default ServicesPages;
