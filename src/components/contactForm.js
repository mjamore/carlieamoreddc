import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as styles from './contactForm.module.css';

const submitForm = (formData) => {
  console.log('formData: ', formData);
};

const RequiredFieldErrorMessage = () => (
  <span className={styles.formError}>This field is required</span>
);

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
      {/* <label htmlFor='phone'>Phone Number
        <input type='tel' name='phone' id='phone' minlength='10' maxlength='12' ref={register} />
      </label> */}
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

export default ContactForm;
