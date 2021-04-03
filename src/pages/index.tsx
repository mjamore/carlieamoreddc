import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/layout/pageLayout';
import '../styles/stars.sass';

// Typescript declarations
interface IndexPageProps {
  data: {
    allContentfulAboutMeSection: {
      edges: [
        {
          node: {
            title: string;
            text: {
              text: string;
            }
          }
        }
      ]
    }
  }
}

const IndexPage = ({ data }: IndexPageProps): ReactElement => {
  const AboutMeContent = data.allContentfulAboutMeSection.edges.map(({ node }, index): ReactElement => {
    let sectionClasses = '';
    if (index % 2 !== 0) {
      sectionClasses += 'bg-green bg-jagged-image bg-jagged-size bg-left-bottom bg-repeat-x shadow-top';
    }

    return (
      <div key={node.title} className={`p-10 ${sectionClasses}`}>
        <div className='max-w-page mx-auto'>
          <div className='mb-5 text-center text-xl'>
            <h2 className='inline-block mx-2.5'>{node.title}</h2>
          </div>
          <hr />
          <p className='mb-12 mt-5'>{ReactHtmlParser(node.text.text)}</p>
        </div>
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
      <PageLayout fullWidth>
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
        <div className='text-center m-5 md:my-12'>
          <StaticImage
            className='border-4 border-green shadow'
            src='../images/carlie/carlie.webp'
            alt='Dr. Carlie Amore, DDS'
            placeholder='blurred'
            aspectRatio={21 / 9}
          />
        </div>
        {AboutMeContent}
      </PageLayout>
    </div>
  );
};

export const query = graphql`
  {
    allContentfulAboutMeSection {
      edges {
        node {
          title
          text {
            text
          }
        }
      }
    }
  }
`;

export default IndexPage;
