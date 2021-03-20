import * as React from 'react';
import PageLayout from '../components/pageLayout';
import ServicesProvided from '../components/servicesProvided';

const ServicesPages = () => {
  return (
    <PageLayout>
      <h1>My Services</h1>
      <ServicesProvided />
    </PageLayout>
  )
}

export default ServicesPages