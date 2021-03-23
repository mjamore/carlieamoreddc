import * as React from 'react';
import PageLayout from '../components/layout/pageLayout';
import ContentContainer from '../components/containers/contentContainer';
import ServicesProvided from '../components/servicesProvided';
import * as globalStyles from '../components/globalStyles.module.css';

const ServicesPages = () => {
  return (
    <PageLayout>
      <ContentContainer>
        <h1 className={globalStyles.pageHeading}>Specialty Services</h1>
        <ServicesProvided />
      </ContentContainer>
    </PageLayout>
  )
}

export default ServicesPages