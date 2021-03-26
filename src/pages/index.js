import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/layout/pageLayout';
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

const IndexPage = () => (
  <div>
    <Helmet
      title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
      meta={[
        { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
        { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
      ]}
    />
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
          // width={200}
          // layout='fullWidth'
          aspectRatio={21 / 9}
        />
      </div>
      <div className={section}>
        <div className={sectionTitle}>
          <span role='img' aria-label='fleur de lis emoji'>⚜️</span>
          <h3>Education at Louisiana State University</h3>
          <span role='img' aria-label='fleur de lis emoji'>⚜️</span>
        </div>
        <p className={aboutMeParagraph}>Dr. Carlie Amore is a Louisiana native who received her Bachelor’s of Science Degree in Microbiology as in 2016 from Louisiana State University. At LSU she was part of the Honors college and graduated Magna Cum Laude. She then went on to receive her Doctor of Dental Surgery Degree from LSU School of Dentistry, one of the best dental schools for strong clinical presence and training.</p>
      </div>
      <div className={`${section} ${jaggedBorder} ${topShadow}`}>
        <div className={sectionTitle}>
          <span role='img' aria-label='red heart emoji'>❤️</span>
          <h3>Philosophy on Holistic Dentistry</h3>
          <span role='img' aria-label='red heart emoji'>❤️</span>
        </div>
        <p className={aboutMeParagraph}>Dr. Amore began prioritizing her journey into the holistic side of medicine and dentistry by attending her first International Academy of Oral Medicine and Toxicology meeting on a student scholarship in 2018. Since then, she has attended 4 meetings and has been exposed to many hours of the latest Continuing Education courses. She recently relocated to Kansas City to work alongside Dr. Julie Babcock in order to continuing learning as much as possible to care for her patients and fulfill her dream of practicing dentistry from a biologic mindset. While in dental school, she was a member of the Student National Dental Association, American Student Dental Association and the Academy of General Dentistry. She is becoming certified in the S.M.A.R.T technique from the IAOMT for safely removing mercury and amalgam fillings. She is proficient in fillings, esthetic crown and bridge work, extractions, using platelet-rich fibrin techniques and bone grafting.</p>
      </div>
      <div className={section}>
        <div className={sectionTitle}>
          <span role='img' aria-label='medical emoji'>⚕️</span>
          <h3>Medical Interests</h3>
          <span role='img' aria-label='medical emoji'>⚕️</span>
        </div>
        <p className={aboutMeParagraph}>Dr. Amore has special interests in toxicology, sleep medicine, airway, and early childhood interventions. She is a Healthy Start provider, addressing sleep-disordered breathing in children to safely and effectively promote growth and development in a natural way. Dr. Amore has completed a breathe course under the teachings of Dr. Zaghi at The Breathe Institute in order to further address breathing issues related to the tongue and tethered oral tissues in infants, children and adults.</p>
      </div>
      <div className={`${section} ${jaggedBorder} ${topShadow}`}>
        <div className={sectionTitle}>
          <span role='img' aria-label='handshake emoji'>🤝</span>
          <h3>Passion for Helping People</h3>
          <span role='img' aria-label='handshake emoji'>🤝</span>
        </div>
        <p className={aboutMeParagraph}>In addition, she has a passion for helping people understand the mind-body-mouth connection, highlighting the fact that each person is unique in their experiences. Dr. Amore focuses on finding and treating the root causes of disease rather than the symptoms. She believes in working together with each person to create a holistic plan that helps them achieve their goals.</p>
      </div>
      <div className={section}>
        <div className={sectionTitle}>
          <span role='img' aria-label='party emoji'>🎉</span>
          <h3>Life Outside of Work</h3>
          <span role='img' aria-label='party emoji'>🎉</span>
        </div>
        <p className={aboutMeParagraph}>Since moving to Kansas City, Dr. Amore has enjoyed meeting the people in her new community and exploring the restaurants and nightlife. She loves feeling connected to nature and all things that allow total presence in the moment. She is a travel enthusiast, loves yoga and meditation, cooking, and spending time with her family back home in New Orleans, Louisiana.</p>
      </div>
    </PageLayout>
  </div>
);

export default IndexPage;
