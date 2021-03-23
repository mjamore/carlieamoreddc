import * as React from 'react';
import PageLayout from '../components/pageLayout';
import ServicesProvided from '../components/servicesProvided';
import ContentContainer from '../components/contentContainer';
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