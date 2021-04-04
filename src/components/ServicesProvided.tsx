import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Typescript declarations
interface Service {
  node: {
    name: string;
    description: {
      description: string;
    };
    order: number;
  }
}

const ServicesProvided = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query servicesProvided {
      allContentfulServicesProvided(sort: { fields: order, order: ASC }) {
        edges {
          node {
            order
            name
            description {
              description
            }
          }
        }
      }
    }
  `);

  const services = data.allContentfulServicesProvided.edges.map(({ node }: Service): ReactElement => (
    <div key={node.name} className='bg-white border border-gray-200 m-5 max-w-sm'>
      <div className='bg-aliceblue pt-5 text-center'>
        <h3 className='mb-5 text-lg'>{node.name}</h3>
        <hr />
      </div>
      <div className='p-5 text-justify'>
        <p>{node.description.description}</p>
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
