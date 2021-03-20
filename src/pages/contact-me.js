import * as React from 'react';
import PageLayout from '../components/pageLayout';

const ContactMePage = () => {
  return (
    <PageLayout>
      <h1>Contact Me</h1>
      <p>If you have any questions or would like more information, please fill out the form below and I'll get back to you as soon as possible.</p>
      <form>
        <label for='firstName'>First name:</label>
        <input type='text' name='firstName'></input>
        <label for='emailAddress'>Email address:</label>
        <input type='email' name='emailAddress'></input>
        <label for='comments'>Comment:</label>
        <textarea name='comments'></textarea>
        <input type='submit' value='Submit' />
      </form>
    </PageLayout>
  )
}

export default ContactMePage