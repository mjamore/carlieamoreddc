import React, { ReactElement } from 'react';

// Typescript delcarations
interface FrequentAskedQuestionProps {
  question: string;
  answer: string;
}

const FrequentAskedQuestion = ({ question, answer }: FrequentAskedQuestionProps): ReactElement => (
  <div className='my-3'>
    <h3>{question}</h3>
    <p>{answer}</p>
  </div>
);

export default FrequentAskedQuestion;
