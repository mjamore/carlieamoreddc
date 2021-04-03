/* eslint-disable import/order */
import React, { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Card from './Card';

// Swiperjs
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, A11y]);

const Testimonials = (): ReactElement => {
  const maxWidthClass = 'max-w-md';
  const imageClasses = 'my-3 rounded-full shadow-circular-img';
  const imagePlaceholderType = 'blurred';
  const loadingType = 'eager';

  return (
    <Swiper
      className='max-w-lg my-12 overflow-hidden text-center'
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide key='Samuel Jordan'>
        <Card
          heading='Samuel Jordan'
          subHeading='Teeth Cleaning'
          description='"Carlie is so good at fixing teeth. I would definitely come back again!"'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/1.jpg'
            alt='Image of Samuel Jordan'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide key='Mollie Horton'>
        <Card
          heading='Mollie Horton'
          subHeading='Jaw Realignment'
          description='"Dr. Amore spent the time with me to find the right solution for my messed up mouth. She also taught me a few yoga moves too! Thanks, Dr. Amore!"'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/2.jpg'
            alt='Image of Mollie Horton'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide key='Rosa J. Sears'>
        <Card
          heading='Rosa J. Sears'
          subHeading='Botox Injection'
          description={'"I met Carlie at a pool party. When I found out she was a dentist, I figured I would give her a shot for my next jaw surgery. 10/10, would recommend. Can\'t wait to party with you again!"'}
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/3.jpg'
            alt='Image of Rosa J. Sears'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide key='Kayne West'>
        <Card
          heading='Kayne West'
          subHeading='Facial Reconstruction Surgery'
          description={'"I looked in the mirror and half my jaw was in the back of my mouth, man. I couldn\'t believe it, but I am still here for y\'all right now, man. This what I got to say right here, dawg. Yeah, turn me up yeah, uh"'}
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/4.jpg'
            alt='Image of Kayne West'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide key='Cornell Haynes Jr.'>
        <Card
          heading='Cornell Haynes Jr.'
          subHeading={'Flossin\' Grill'}
          description={'"Got 30 down at the bottom, 30 more at the top. All invisible set in little ice cube blocks. If I could call it a drink, call it a smile on the rocks. If I could call out a price, let\'s say I call out a lot."'}
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/5.jpg'
            alt='Image of Cornell Haynes Jr.'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide key='Belcalis Marlenis Almánzar'>
        <Card
          heading='Belcalis Marlenis Almánzar'
          subHeading='Straightened Teeth'
          description='"Got a bag and fixed my teeth."'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/testimonials/6.jpg'
            alt='Image of Belcalis Marlenis Almánzar'
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
