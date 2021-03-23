import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as globalStyles from '../components/globalStyles.module.css'
import * as styles from './testimonials.module.css';

const testimonialData = [
  {
    'name': 'Samuel Jordan',
    'text': '"Carlie is so good at fixing teeth. I would definitely come back again!"',
    'userImage': '../images/testimonials/1.jpg'
  },
  {
    'name': 'Mollie Horton',
    'text': '"Dr. Amore spent the time with me to find the right solution for my messed up mouth. She also taught me a few yoga moves too! Thanks, Dr. Amore!"',
    'userImage': '../images/testimonials/2.jpg'
  },
  {
    'name': 'Rosa J. Sears',
    'text': '"I met Carlie at a pool party. When I found out she was a dentist, I figured I\'d give her a shot for my next jaw surgery. 10/10, would recommend. Can\'t wait to party with you again!"',
    'userImage': '../images/testimonials/3.jpg'
  }
];

const Testimonials = () => {

  const testimonialItems = testimonialData.map((testimonial, index) => {    
    return (
      <div key={index} className={styles.testimonial}>
        <div className={`${globalStyles.width100} ${globalStyles.centered}`}>
          <StaticImage
            className={globalStyles.circularImage}
            src='../images/testimonials/3.jpg'
            alt='User testimonial image'
            placeholder='blurred'
          />
        </div>
        <h4 className={globalStyles.centered}>{testimonial.name}</h4>
        <p>{testimonial.text}</p>
      </div>
    );
  });

  return (
    <div>
      {testimonialItems}
    </div>
  );
}

export default Testimonials;
