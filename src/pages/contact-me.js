import * as React from 'react';
import PageLayout from '../components/layout/pageLayout';
import ContentContainer from '../components/containers/contentContainer';
import ContactForm from '../components/contactForm';
import * as globalStyles from '../components/globalStyles.module.css';

const ContactMePage = () => {
  return (
    <PageLayout>
      <ContentContainer>
        <h1 className={globalStyles.pageHeading}>Let's Get in Touch</h1>
        <p className={globalStyles.paragraph}>If you have any questions or would like more information, please fill out the form below and I'll get back to you as soon as possible.</p>
        <p className={globalStyles.paragraph}>You can also reach me at any of the social media links below.</p>
        <ContactForm />
      </ContentContainer>
    </PageLayout>
  )
}

export default ContactMePage