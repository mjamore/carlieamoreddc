import * as React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/pageLayout';
import ServicesProvided from '../components/servicesProvided';
import Testimonials from '../components/testimontials';
import * as globalStyles from '../components/globalStyles.module.css';

const BroadmoorHolisticDentistryPage = () => {
  return (
    <div>
      <Helmet
        title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
        meta={[
          { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
          { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
        ]}
      ></Helmet>
      <PageLayout>
        <h1 className={globalStyles.pageHeading}>Broadmoor Holistic Dentistry</h1>
        <h2>Choosing a dentist for you &amp; your family is an important decision that should not be taken lightly</h2>
        <h2>Why We are Different</h2>
        <p>Our medical world is rapidly changing into a very fast paced, high production model that runs patients through the practice as quickly as possible. The more patients that the doctor can see, the more money he or she can make. The focus is on treating symptoms with quick fixes. There is no time, no desire, and no knowledge to go beyond symptom treatment and determine the cause.  If a cause is never addressed, the problem will surely return. We have chosen a different path. You will notice from the moment you walk in that this practice will be different.</p>
        <h2>The truth is...</h2>
        <p>Dental professionals vary <span className={globalStyles.bold}>greatly</span> in</p>
        <ul>
          <li>Technical skills</li>
          <li>Diagnostic ability</li>
          <li>Desire to participate in quality continuing education</li>
          <li>Care to be gentle and painless</li>
          <li>Time they are willing to spend to know your values and treat you as you want to be treated</li>
          <li>Importance placed on prevention</li>
          <li>Warmth and personality style in a stressful situation</li>
        </ul>
        <h2>Our committed promises...</h2>
        <p>We <span className={globalStyles.bold}>promise</span> to</p>
        <ul>
          <li>Take time to understand each person’s values</li>
          <li>Work with each person to create a plan that fits within their values</li>
          <li>Teach prevention.  Dental disease is controllable when committed and understood</li>
          <li>Look at the cause of disease, and not just band-aid over symptoms</li>
        </ul>
        <ServicesProvided />
        <Testimonials />
      </PageLayout>
    </div>
  )
}

export default BroadmoorHolisticDentistryPage