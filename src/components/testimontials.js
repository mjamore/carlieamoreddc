/* eslint-disable import/order */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import testimonialData from '../data/testimonials';
import {
  width100,
  centered,
  circularImage,
  imgShadow,
  swiperContainer,
} from './globalStyles.module.css';
import {
  testimonialContainer,
  image,
} from './testimonials.module.css';

// Swiperjs
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, A11y]);

const Testimonials = () => {
  const testimonialItems = testimonialData.map((testimonial) => (
    <SwiperSlide key={testimonialData.name}>
      <div className={`${testimonialContainer} ${imgShadow}`}>
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
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={`${swiperContainer} ${centered}`}
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
