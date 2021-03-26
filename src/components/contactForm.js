import * as React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as styles from './contactForm.module.css';

const submitForm = (formData) => {
  console.log('formData: ', formData);
};

const RequiredFieldErrorMessage = () => (
  <span className={styles.formError}>This field is required</span>
);

const ContactForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { className } = props;

  return (
    <form className={className} onSubmit={handleSubmit(submitForm)}>
      <h4>Let&apos;s Get in Touch</h4>
      <hr />
      <label htmlFor='name'>
        Name
        <span>*</span>
        <input type='text' name='name' id='name' ref={register({ required: true })} />
        {errors.name && <RequiredFieldErrorMessage />}
      </label>
      <label htmlFor='emailAddress'>
        Email address
        <span>*</span>
        <input type='email' name='emailAddress' id='emailAddress' ref={register({ required: true })} />
        {errors.emailAddress && <RequiredFieldErrorMessage />}
      </label>
      <label htmlFor='message'>
        Message
        <span>*</span>
        <textarea name='message' id='message' ref={register({ required: true })} />
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
