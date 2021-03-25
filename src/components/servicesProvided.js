import React from 'react';
import servicesProvidedData from '../data/servicesProvided';
import FlexboxDiv from './containers/flexboxDiv';
import Card from './card';

const ServicesProvided = () => {
  const services = servicesProvidedData.map((service) => (
    <Card key={service.name} cardTitle={service.name} cardBody={service.description} />
  ));

  return (
    <FlexboxDiv>
      {services}
    </FlexboxDiv>
  );
};

export default ServicesProvided;
