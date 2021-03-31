import React, { ReactElement } from 'react';

// Typescript declarations
interface CardProps {
  children: ReactElement;
  heading: string;
  subHeading: string;
  description: string;
  maxWidth: string;
}

const Card = ({
  children,
  heading,
  subHeading,
  description,
  maxWidth,
}: CardProps): ReactElement => (
  <div className={`border-4 border-green flex flex-col items-center justify-center ${maxWidth} mx-auto my-10 p-3 shadow`}>
    {children}
    <h4 className='my-3 text-lg'>{heading}</h4>
    <h5 className='my-2'>{subHeading}</h5>
    <hr className='my-3 w-full' />
    <p className='m-3 text-center'>{description}</p>
  </div>
);

Card.defaultProps = {
  heading: '',
  subHeading: '',
  description: '',
  maxWidth: 'max-w-md',
};

export default Card;
