import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/layout/pageLayout';
import HeaderNavigation from '../components/layout/headerNavigation';
import HamburgerMenu from '../components/layout/hamburgerMenu';
import aboutMeContent from '../data/aboutMeContent';
import {
  width100,
  centered,
  imgShadow,
  spacedSection,
} from '../components/globalStyles.module.css';
import {
  heroImageContainer,
  tagline,
  jaggedBorder,
  topShadow,
  section,
  sectionTitle,
  aboutMeParagraph,
} from './index.module.css';

const IndexPage = () => {
  const AboutMeSection = aboutMeContent.map((aboutMeSection, index) => {
    const sectionClasses = index % 2 === 0 ? `${section}` : `${section} ${jaggedBorder} ${topShadow}`;

    return (
      <div key={aboutMeSection.title} className={sectionClasses}>
        <div className={sectionTitle}>
          <span role='img' aria-label={aboutMeSection.emojiDescription}>{aboutMeSection.emoji}</span>
          <h3>{aboutMeSection.title}</h3>
          <span role='img' aria-label={aboutMeSection.emojiDescription}>{aboutMeSection.emoji}</span>
        </div>
        <p className={aboutMeParagraph}>{aboutMeSection.text}</p>
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
      <HeaderNavigation />
      <PageLayout>
        <div className={heroImageContainer}>
          <div className={width100}>
            <StaticImage
              src='../images/background-patterns/gradient3.jpg'
              alt='Blue background image'
              placeholder='blurred'
              layout='fullWidth'
              aspectRatio={21 / 7}
            />
          </div>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <p className={tagline}>Doctor of Dental Surgery<br />Specializing in Holistic Dentistry</p>
        </div>
        <div className={`${centered} ${spacedSection}`}>
          <StaticImage
            className={imgShadow}
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
