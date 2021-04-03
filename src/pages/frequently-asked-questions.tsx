import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import PageLayout from '../components/layout/PageLayout';
import PageHeading from '../components/PageHeading';
import frequentlyAskedQuestionsData from '../data/frequentlyAskedQuestions';
import Faq from '../components/FAQ';

// Typescript declarations
interface FAQ {
  question: string;
  answer: string;
}

const EducationPage = (): ReactElement => {
  const faqs = frequentlyAskedQuestionsData.map((faq: FAQ): ReactElement => (
    <div key={faq.question}>
      <Faq question={faq.question} answer={ReactHtmlParser(faq.answer)} />
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

export default EducationPage;
