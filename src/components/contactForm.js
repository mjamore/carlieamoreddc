/* eslint-disable no-console */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  form,
  formError,
  label,
  input,
  textarea,
} from './contactForm.module.css';

const submitForm = (formData) => {
  console.log('formData: ', formData);

  const emailUrl = `https://carlieamoredds.netlify.app/.netlify/functions/sendEmail/?name=${formData.name}&email=${formData.emailAddress}&message=${formData.message}`;

  axios.get(emailUrl)
    .then((response) => {
      // handle success
      console.log('success response: ', response);
    })
    .catch((error) => {
      // handle error
      console.log('error response: ', error);
    });
};

const RequiredFieldErrorMessage = () => (
  <span className={formError}>This field is required</span>
);

const ContactForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { className } = props;

  return (
    <form className={`${form} ${className}`} onSubmit={handleSubmit(submitForm)}>
      <h4>Let&apos;s Get in Touch</h4>
      <hr />
      <label className={label} htmlFor='name'>
        Name
        <span>*</span>
        <input className={input} type='text' name='name' id='name' ref={register({ required: true })} />
        {errors.name && <RequiredFieldErrorMessage />}
      </label>
      <label className={label} htmlFor='emailAddress'>
        Email address
        <span>*</span>
        <input className={input} type='email' name='emailAddress' id='emailAddress' ref={register({ required: true })} />
        {errors.emailAddress && <RequiredFieldErrorMessage />}
      </label>
      <label className={label} htmlFor='message'>
        Message
        <span>*</span>
        <textarea className={textarea} name='message' id='message' ref={register({ required: true })} />
        {errors.message && <RequiredFieldErrorMessage />}
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

ContactForm.defaultProps = {
  className: null,
};

export default ContactForm;
