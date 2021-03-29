import React from 'react';
import servicesProvidedData from '../data/servicesProvided';

const ServicesProvided = () => {
  const services = servicesProvidedData.map((service) => (
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
