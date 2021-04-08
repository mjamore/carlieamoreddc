import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

const NavigationItem = (): ReactElement => {
  const linkClasses = 'block hover:text-black no-underline pr-3 py-3 text-base text-font-color text-left w-full';

  return (
    <div>
      <Link to='//' className={linkClasses}>Home</Link>
      <Link to='/my-education/' className={linkClasses}>My Education</Link>
      <Link to='/specialties/' className={linkClasses}>Specialty Services</Link>
      <div className='ml-7'>
        <Link to='/specialties/ozone-therapy' className={linkClasses}>Ozone Therapy</Link>
        <Link to='/specialties/pediatric-dentistry' className={linkClasses}>Pediatric Dentistry</Link>
        <Link to='/specialties/safe-mercury-removal' className={linkClasses}>Safe Mercury Removal</Link>
        <Link to='/specialties/general-restorative-dentistry' className={linkClasses}>General Restorative Dentistry</Link>
        <Link to='/specialties/airway-and-tongue-tie' className={linkClasses}>Airway and Tongue Tie</Link>
        <Link to='/specialties/extractions-and-bone-grafts' className={linkClasses}>Extractions and Bone Grafts</Link>
      </div>
      <Link to='/holistic-dentistry/' className={linkClasses}>All About Holisitic Dentistry</Link>
      <Link to='/frequently-asked-questions/' className={linkClasses}>Frequently Asked Questions</Link>
      <Link to='/broadmoor-holistic-dentistry/' className={linkClasses}>Broadmoor Holistic Dentistry</Link>
      <Link to='/patient-testimonials/' className={linkClasses}>Patient Testimonials</Link>
    </div>
  );
};

export default NavigationItem;
