import React, { ReactElement } from 'react';

// Typescript delcarations
interface FrequentAskedQuestionProps {
  question: string;
  answer: string;
}

const FrequentAskedQuestion = ({ question, answer }: FrequentAskedQuestionProps): ReactElement => (
  <div className='my-12'>
    <h2 className='my-1'>{question}</h2>
    <p>{answer}</p>
  </div>
);

export default FrequentAskedQuestion;
