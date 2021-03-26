import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import testimonialData from '../data/testimonials';
import { width100, centered, circularImage } from './globalStyles.module.css';
import { testimonialsContainer, testimonialContainer, image } from './testimonials.module.css';

const Testimonials = () => {
  const testimonialItems = testimonialData.map((testimonial) => (
    <div key={testimonialData.name} className={testimonialContainer}>
      <div className={`${width100} ${centered}`}>
        <StaticImage
          className={`${circularImage} ${image}`}
          src='../images/testimonials/3.jpg'
          alt='User testimonial image'
          placeholder='blurred'
        />
      </div>
      <h4 className={centered}>{testimonial.name}</h4>
      <h5>{testimonial.service}</h5>
      <hr />
      <p>{testimonial.text}</p>
    </div>
  ));

  return (
    <div className={centered}>
      <h3>Patient Testimonials</h3>
      <div className={testimonialsContainer}>
        {testimonialItems}
      </div>
    </div>
  );
};

export default Testimonials;
