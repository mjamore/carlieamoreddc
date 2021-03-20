import React from 'react';

const testimonialData = [
  {
    'name': 'Samuel Jordan',
    'text': 'Sample testimonial text here'
  },
  {
    'name': 'Mollie Horton',
    'text': 'Sample testimonial text here'
  },
  {
    'name': 'Rosa J. Sears',
    'text': 'Sample testimonial text here'
  }
];

const Testimonials = () => {

  const testimonialItems = testimonialData.map((testimonial, index) => {
    return (
      <div>
        <h4>{testimonial.name}</h4>
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
