import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import PageLayout from '../components/layout/pageLayout';
import PageHeading from '../components/pageHeading';
import frequentlyAskedQuestionsData from '../data/frequentlyAskedQuestions';
import Faq from '../components/faq';

// Typescript declarations
interface FAQ {
  question: string;
  answer: string;
}

const EducationPage = (): ReactElement => {
  const faqs = frequentlyAskedQuestionsData.map((faq: FAQ): ReactElement => (
    <div>
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
        <div className='max-w-page mx-5 md:mx-auto'>
          {faqs}
        </div>
      </PageLayout>
    </div>
  );
};

export default EducationPage;
