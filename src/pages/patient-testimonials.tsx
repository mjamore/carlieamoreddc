import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import PageHeading from '../components/PageHeading';
import Testimonials from '../components/Testimonials';
import TestimonialsForm from '../components/forms/TestimonialForm';

const TestimonialsPage = (): ReactElement => (
  <div>
    <Helmet
      title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
      meta={[
        { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
        { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
      ]}
    />
    <PageLayout>
      <PageHeading headingText='Patient Testimonials' />
      <p className='my-6'>The best compliment I can recieve is to hear that my patients are satified with the service I&apos;ve provided.  I take an enormous amount of pride in the work that I do, and my primary goal is always to make sure my patients are happy and healthy.</p>
      <p className='my-6'>Here are a few of my favorite patient testimonials that I&apos;ve received over the years.</p>
      <Testimonials />
      <p className='my-6'>I&apos;d love to hear about your experience!  If we&apos;ve worked together in the past, feel free to let me know about your experience, and I&apos;ll add your testimonial to the site!</p>
      <TestimonialsForm />
    </PageLayout>
  </div>
);

export default TestimonialsPage;
