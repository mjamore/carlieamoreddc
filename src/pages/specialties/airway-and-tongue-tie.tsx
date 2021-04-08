import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../../components/layout/PageLayout';
import PageHeading from '../../components/PageHeading';

const EducationPage = (): ReactElement => (
  <div>
    <Helmet
      title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
      meta={[
        { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
        { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
      ]}
    />
    <PageLayout>
      <PageHeading headingText='Airway and Tongue Tie' />
      <StaticImage
        src='../../images/teeth1.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <StaticImage
        src='../../images/teeth2.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <StaticImage
        src='../../images/teeth3.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <StaticImage
        src='../../images/teeth4.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <StaticImage
        src='../../images/teeth5.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <StaticImage
        src='../../images/teeth6.JPG'
        alt='teeth'
        placeholder='blurred'
      />
      <iframe
        title='Airway and TMJ'
        src='https://www.youtube.com/embed/d5Jy0-8QzTY'
        width='420'
        height='315'
      />
    </PageLayout>
  </div>
);

export default EducationPage;
