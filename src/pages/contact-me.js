import * as React from 'react';
import PageLayout from '../components/pageLayout';

const ContactMePage = () => {
  return (
    <PageLayout>
      <h1>Contact Me</h1>
      <p>If you have any questions or would like more information, please fill out the form below and I'll get back to you as soon as possible.</p>
      <form>
        <label for='firstName'>First name:
          <input type='text' name='firstName' id='firstName'></input>
        </label>
        <label for='emailAddress'>Email address:
          <input type='email' name='emailAddress' id='emailAddress'></input>
        </label>
        <label for='comments'>Comment:
          <textarea name='comments' id='comments'></textarea>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </PageLayout>
  )
}

export default ContactMePage