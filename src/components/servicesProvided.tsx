import React, { ReactElement } from 'react';
import servicesProvidedData from '../data/servicesProvided';

// Typescript declarations
interface Service {
  name: string;
  description: string;
}

const ServicesProvided = (): ReactElement => {
  const services = servicesProvidedData.map((service: Service): ReactElement => (
    <div key={service.name} className='bg-white border border-gray-200 m-5 max-w-sm'>
      <div className='bg-aliceblue pt-5 text-center'>
        <h3 className='mb-5 text-lg'>{service.name}</h3>
        <hr />
      </div>
      <div className='p-5 text-justify'>
        <p>{service.description}</p>
      </div>
    </div>
  ));

  return (
    <div className='flex flex-wrap justify-center'>
      {services}
    </div>
  );
};

export default ServicesProvided;
