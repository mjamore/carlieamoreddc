import * as React from 'react';
import PageLayout from '../components/pageLayout';
import ContactForm from '../components/contactForm';

const ContactMePage = () => {
  return (
    <PageLayout>
      <h1>Contact Me</h1>
      <p>If you have any questions or would like more information, please fill out the form below and I'll get back to you as soon as possible.</p>
      <ContactForm />
    </PageLayout>
  )
}

export default ContactMePage