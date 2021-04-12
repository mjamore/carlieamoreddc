import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../../components/layout/PageLayout';
import PageHeading from '../../components/PageHeading';
import ResponsiveIframe from '../../components/ResponsiveIframe';

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
    <div key={node.question}>
      <h2>{node.question}</h2>
      <p>{ReactHtmlParser(node.answer.answer)}</p>
    </div>
  ));

  return (
    <div>
      <Helmet
        title='Safe Mercury Removal | Dr. Carlie Amore, DDS'
        meta={[
          { name: 'description', content: 'The Safe Mercury Amalgam Removal Technique.' },
        ]}
      />
      <PageLayout>
        <PageHeading headingText='Safe Mercury Removal' />
        {faqs}
        <figure>
          <StaticImage
            src='../../images/specialties/safe-mercury-removal/mercury-removal-2.jpg'
            alt='Dr. Carlie Amore wearing protective equipment in preparation for a safe mercury removal procedure'
            width={500}
            aspectRatio={145 / 193}
          />
          <figcaption className='w-500'>An example of the personal protective equipment worn during a safe mercury removal procedure.</figcaption>
        </figure>
        <ResponsiveIframe iframeTitle="Neurodegeneration -- the Mercury Alzheimer's disease connection" iframeUrl='https://www.youtube.com/embed/pPVxiDpsNDg' />
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
