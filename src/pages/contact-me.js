import * as React from 'react';
import PageLayout from '../components/pageLayout';
import ContactForm from '../components/contactForm';
import ContentContainer from '../components/contentContainer';
import * as globalStyles from '../components/globalStyles.module.css';

const ContactMePage = () => {
  return (
    <PageLayout>
      <ContentContainer>
        <h1>Let's Get in Touch</h1>
        <p className={globalStyles.paragraph}>If you have any questions or would like more information, please fill out the form below and I'll get back to you as soon as possible.</p>
        <p className={globalStyles.paragraph}>You can also reach me at any of the social media links below.</p>
        <ContactForm />
      </ContentContainer>
    </PageLayout>
  )
}

export default ContactMePage