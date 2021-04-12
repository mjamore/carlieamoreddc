import React, { ReactElement } from 'react';

// Typescript delcarations
interface FrequentAskedQuestionProps {
  question: string;
  answer: ReactElement[];
}

const FrequentAskedQuestion = ({ question, answer }: FrequentAskedQuestionProps): ReactElement => (
  <div className='my-12'>
    <h3 className='my-1'>
      <span className='font-black'>Q: </span>
      {question}
    </h3>
    <p>
      <span className='font-black'>A: </span>
      {answer}
    </p>
  </div>
);

export default FrequentAskedQuestion;
