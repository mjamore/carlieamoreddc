import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import PageLayout from '../../components/layout/PageLayout';
import PageHeading from '../../components/PageHeading';

const ServicesPages = (): ReactElement => (
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
        <PageHeading headingText='Specialty Services' />
        <Link to='/specialties/ozone-therapy/' className='block link'>Ozone Therapy</Link>
        <Link to='/specialties/pediatric-dentistry/' className='block link'>Pediatric Dentistry</Link>
        <Link to='/specialties/safe-mercury-removal/' className='block link'>Safe Mercury Removal</Link>
        <Link to='/specialties/general-restorative-dentistry/' className='block link'>General Restorative Dentistry</Link>
        <Link to='/specialties/airway-and-tongue-tie/' className='block link'>Airway and Tongue Tie</Link>
        <Link to='/specialties/extractions-and-bone-grafts/' className='block link'>Extractions and Bone Grafts</Link>
      </div>
    </PageLayout>
  </div>
);

export default ServicesPages;
