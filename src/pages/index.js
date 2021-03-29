import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/layout/pageLayout';
import aboutMeContent from '../data/aboutMeContent';
import '../styles/stars.sass';

const IndexPage = () => {
  const AboutMeSection = aboutMeContent.map((aboutMeSection, index) => {
    let sectionClasses = '';
    if (index % 2 !== 0) {
      sectionClasses += 'bg-green bg-jagged-image bg-jagged-size bg-left-bottom bg-repeat-x shadow-top';
    }

    return (
      <div key={aboutMeSection.title} className={`p-10 ${sectionClasses}`}>
        <div className='mb-5 text-center text-xl uppercase'>
          <span className='text-xl' role='img' aria-label={aboutMeSection.emojiDescription}>{aboutMeSection.emoji}</span>
          <h3 className='inline-block mx-2.5'>{aboutMeSection.title}</h3>
          <span className='text-xl' role='img' aria-label={aboutMeSection.emojiDescription}>{aboutMeSection.emoji}</span>
        </div>
        <p className='max-w-page mb-12 mt-5 mx-auto'>{aboutMeSection.text}</p>
      </div>
    );
  });

  return (
    <div>
      <Helmet
        title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
        meta={[
          { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
          { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
        ]}
      />
      <PageLayout>
        <div className='flex items-center justify-center overflow-hidden relative'>
          <div className='w-full'>
            <StaticImage
              src='../images/background-patterns/gradient3.jpg'
              alt='Blue background image'
              placeholder='blurred'
              layout='fullWidth'
              aspectRatio={21 / 7}
            />
          </div>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <p className='absolute bg-gray-700 p-4 md:p-8 md:text-3xl rounded-md text-center text-lg text-white z-10'>Doctor of Dental Surgery<br />Specializing in Holistic Dentistry</p>
          <div id='stars' />
          <div id='stars2' />
          <div id='stars3' />
        </div>
        <div className='text-center my-12'>
          <StaticImage
            className='border-4 border-green shadow'
            src='../images/carlie/carlie.webp'
            alt='Dr. Carlie Amore, DDS'
            placeholder='blurred'
            aspectRatio={21 / 9}
          />
        </div>
        {AboutMeSection}
      </PageLayout>
    </div>
  );
};

export default IndexPage;
