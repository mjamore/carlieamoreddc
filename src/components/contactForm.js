import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as styles from './contactForm.module.css';

const submitForm = (formData) => {
  console.log('formData: ', formData);
};

const RequiredFieldErrorMessage = () => {
  return(
    <span className={styles.formError}>This field is required</span>
  );
};

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <label className={styles.label} htmlFor='name'>Name <span className={styles.requiredAsterisk}>*</span>
        <input className={styles.input} type='text' name='name' id='name' ref={register({ required: true })} />
        {errors.name && <RequiredFieldErrorMessage />}
      </label>
      <label className={styles.label} htmlFor='emailAddress'>Email address <span className={styles.requiredAsterisk}>*</span>
        <input className={styles.input} type='email' name='emailAddress' id='emailAddress' ref={register({ required: true })} />
        {errors.emailAddress && <RequiredFieldErrorMessage />}
      </label>
      <label className={styles.label} htmlFor='phone'>Phone Number
        <input className={styles.input} type='number' name='phone' id='phone' ref={register} />
      </label>
      <label className={styles.label} htmlFor='message'>Message <span className={styles.requiredAsterisk}>*</span>
        <textarea className={styles.textarea} name='message' id='message' ref={register({ required: true })} />
        {errors.message && <RequiredFieldErrorMessage />}
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default ContactForm;