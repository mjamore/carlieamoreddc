import * as React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/pageLayout';
import ContentContainer from '../components/containers/contentContainer';
import ServicesProvided from '../components/servicesProvided';
import * as globalStyles from '../components/globalStyles.module.css';

const ServicesPages = () => {
  return (
    <div>
      <Helmet
        title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
        meta={[
          { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
          { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
        ]}
      ></Helmet>
      <PageLayout>
        <ContentContainer>
          <h1 className={globalStyles.pageHeading}>Specialty Services</h1>
          <ServicesProvided />
        </ContentContainer>
      </PageLayout>
    </div>
  )
}

export default ServicesPages