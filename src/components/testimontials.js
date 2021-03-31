/* eslint-disable import/order */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Card from './card';
import testimonialData from '../data/testimonials';

// Swiperjs
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, A11y]);

const Testimonials = () => {
  const testimonialItems = testimonialData.map((testimonial) => (
    <SwiperSlide key={testimonial.name}>
      <Card
        heading={testimonial.name}
        subHeading={testimonial.service}
        description={testimonial.text}
        maxWidth='max-w-md'
      >
        <StaticImage
          className='my-3 rounded-full shadow-circular-img'
          src='../images/testimonials/3.jpg'
          alt='User testimonial image'
          placeholder='blurred'
        />
      </Card>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className='max-w-lg my-12 overflow-hidden text-center'
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {testimonialItems}
    </Swiper>
  );
};

export default Testimonials;
