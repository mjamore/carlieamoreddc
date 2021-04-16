import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import Scroll from 'react-scroll';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../../components/layout/PageLayout';
import PageHeading from '../../components/PageHeading';
import ResponsiveIframe from '../../components/ResponsiveIframe';

const { scroller } = Scroll;

// Typescript declarations
interface SafeMercuryRemovalPageProps {
  data: {
    allContentfulSafeMercuryRemovalFaq: {
      edges: [
        {
          node: {
            question: string;
            answer: {
              answer: string;
            };
            order: number;
          }
        }
      ]
    }
  }
}

const SafeMercuryRemovalPage = ({ data }: SafeMercuryRemovalPageProps): ReactElement => {
  const faqs = data.allContentfulSafeMercuryRemovalFaq.edges.map(({ node }): ReactElement => (
    <div className='my-12' key={node.question}>
      <h2>{node.question}</h2>
      <p>{ReactHtmlParser(node.answer.answer)}</p>
    </div>
  ));

  const scrollToContactForm = () => {
    scroller.scrollTo('contact-form', { smooth: false });
  };

  return (
    <div>
      <Helmet
        title='Safe Mercury Amalgam Removal Technique | Dr. Carlie Amore'
        meta={[
          { name: 'description', content: 'What are dental mercury amalgams, why are mercury fillings dangerous, and what is the Safe Mercury Amalgam Removal Technique? Learn more from Dr. Carlie Amore!' },
        ]}
      />
      <PageLayout>
        <PageHeading headingText='Safe Mercury Removal' />
        {faqs}
        <figure className='max-w-500 mx-auto my-12'>
          <StaticImage
            className='border-4 border-green shadow'
            src='../../images/specialties/safe-mercury-removal/mercury-removal-2.jpg'
            alt='Dr. Carlie Amore wearing protective equipment in preparation for a safe mercury removal procedure'
            width={500}
          />
          <figcaption className='max-w-500'>An example of the personal protective equipment worn during a safe mercury removal procedure.</figcaption>
        </figure>
        <p>This video shared by the <a className='link' href='https://iaomt.org/resources/dental-mercury-facts/mercury-poisoning-symptoms-dental-amalgam/' target='_blank' rel='noopener noreferrer'>International Academy of Oral Medicine and Toxicology</a> and published by the University of Calgary highlights that mercury is the only toxin that has ever been shown to directly cause all the typical degenerative pathologies of Alzheimer&apos;s disease in nerve cell cultures.</p>
        <ResponsiveIframe iframeTitle="Neurodegeneration -- the Mercury Alzheimer's disease connection" iframeUrl='https://www.youtube.com/embed/pPVxiDpsNDg' />
        <h2 className='mt-12'>Let Me Help Remove Your Mercury Fillings</h2>
        <p>Do you have one or more mercury fillings that you need removed? I would love to speak to you! Fill out the <span className='link' role='link' tabIndex={0} aria-hidden='true' onClick={scrollToContactForm}>contact form</span> or <a href='mailto:carlieamore@gmail.com' className='link'>email me</a> and we can schedule a time to remove your mercury fillings in a safe and timely manor.</p>
      </PageLayout>
    </div>
  );
};

export const query = graphql`
  query SafeMercuryRemovalFAQS {
    allContentfulSafeMercuryRemovalFaq(sort: { fields: order, order: ASC }) {
      edges {
        node {
          answer {
            answer
          }
          question
          order
        }
      }
    }
  }
`;

export default SafeMercuryRemovalPage;
