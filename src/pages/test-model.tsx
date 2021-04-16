import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageLayout from '../components/layout/PageLayout';
import PageHeading from '../components/PageHeading'

const Bold = ({ children }) => <span className='bold'>{children}</span>;

const Text = ({ children }) => <p className='align-center'>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: (node, children) => <a className='link' href={`${node.data.uri}`} target='_blank' rel='noopener noreferrer'>{children}</a>
  },
};

// Typescript declarations
interface TestModelPageProps {
  data: {
    allContentfulTestModel: {
      edges: [
        {
          node: {
            content: {
              raw: string;
            }
          }
        }
      ]
    }
  }
}

const TestModelPage = ({ data }: TestModelPageProps): ReactElement => {
  const faqs = data.allContentfulTestModel.edges.map(({ node }, index): ReactElement => (
    <div className='my-12' key={index}>
      {documentToReactComponents(JSON.parse(node.content.raw), options)}
    </div>
  ));

  return (
    <div>
      <Helmet
        title='Safe Mercury Amalgam Removal Technique | Dr. Carlie Amore'
        meta={[
          { name: 'description', content: 'What are dental mercury amalgams, why are mercury fillings dangerous, and what is the Safe Mercury Amalgam Removal Technique? Learn more from Dr. Carlie Amore!' },
        ]}
      />
      <PageLayout>
        <PageHeading headingText='Test Model Page' />
        {faqs}
      </PageLayout>
    </div>
  );
};

export const query = graphql`
  query TestModelPageQuery {
    allContentfulTestModel {
      edges {
        node {
          content {
            raw
          }
        }
      }
    }
  }
`;

export default TestModelPage;
