import React, { ReactElement } from 'react';

// Typescript Declarations
interface CardProps {
  /**
   * The StaticImage component that you want rendered inside of the Card component
   */
  children: ReactElement;
  /**
   * The heading text you want rendered on the Card component
   */
  heading: string;
  /**
   * The subheading text you want rendered on the Card component
   */
  subHeading: string;
  /**
   * The description text you want rendered on the Card component
   */
  description: string;
  /**
   * The TailwindCSS max-width class that determines that maximum width of the card 
   */
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
