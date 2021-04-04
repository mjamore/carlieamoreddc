import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import PageLayout from '../components/layout/PageLayout';
import PageHeading from '../components/PageHeading';
import Faq from '../components/FAQ';

// Typescript declarations
interface FrequentlyAskedQuestionsPageProps {
  data: {
    allContentfulFrequentlyAskedQuestion: {
      edges: [
        {
          node: {
            question: string;
            answer: {
              answer: string;
            }
          }
        }
      ]
    }
  }
}

const FrequentlyAskedQuestionsPage = ({ data }: FrequentlyAskedQuestionsPageProps): ReactElement => {
  const faqs = data.allContentfulFrequentlyAskedQuestion.edges.map(({ node }): ReactElement => (
    <div key={node.question}>
      <Faq question={node.question} answer={ReactHtmlParser(node.answer.answer)} />
    </div>
  ));

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
        <PageHeading headingText='Most Frequently Asked Questions' />
        {faqs}
      </PageLayout>
    </div>
  );
};

export const query = graphql`
  query frequentlyAskedQuestion {
    allContentfulFrequentlyAskedQuestion(sort: { fields: order, order: ASC }) {
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

export default FrequentlyAskedQuestionsPage;
