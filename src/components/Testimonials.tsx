/* eslint-disable import/order */
import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Card from './Card';

// Swiperjs
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, A11y]);

// Typescript delcarations
interface UserTestimonial {
  node: {
    name: string;
    serviceProvided: string;
    testimonialText: {
      testimonialText: string;
    };
    userImage: {
      gatsbyImageData: any;
    };
  }
}

const Testimonials = () => {
  const maxWidthClass = 'max-w-md';
  const imageClasses = 'my-3 rounded-full shadow-circular-img';
  const imagePlaceholderType = 'blurred';
  const loadingType = 'eager';

  const data = useStaticQuery(graphql`
    query userTestimonials {
      allContentfulUserTestimonial(sort: { fields: order, order: ASC }) {
        edges {
          node {
            name
            serviceProvided
            order
            testimonialText {
              testimonialText
            }
            userImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const TestimonialsContent = data.allContentfulUserTestimonial.edges.map(({ node }: UserTestimonial): ReactElement => {
    const image = getImage(node.userImage);

    return (
      <SwiperSlide key={node.name}>
        <Card
          heading={node.name}
          subHeading={node.serviceProvided}
          description={node.testimonialText.testimonialText}
          maxWidth={maxWidthClass}
        >
          <GatsbyImage
            className={imageClasses}
            image={image}
            alt={`User image of ${node.name}`}
            placeholder={imagePlaceholderType}
            loading={loadingType}
          />
        </Card>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className='max-w-lg my-12 overflow-hidden text-center'
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {TestimonialsContent}
    </Swiper>
  );
};

export default Testimonials;
