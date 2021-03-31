/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Typescript declarations
interface ContactFormProps {
  /**
   * This class (or classes) will get applied to outermost element of this component, the form tag
   */
  className: string;
}

interface FormData {
  name: string,
  emailAddress: string,
  message: string,
}

// Called when the user submits the contact form.
const submitForm = (formData: FormData): void => {
  console.log('formData: ', formData);

  const emailUrl = `https://carlieamoredds.netlify.app/.netlify/functions/sendEmail/?name=${formData.name}&email=${formData.emailAddress}&message=${formData.message}`;

  axios.get(emailUrl)
    .then((response) => {
      console.log('success response: ', response);
    })
    .catch((error) => {
      console.log('error response: ', error);
    });
};

const RequiredFieldErrorMessage = (): ReactElement => (
  <span className='text-red-800 text-xs'>This field is required</span>
);

const ContactForm = ({ className }: ContactFormProps): ReactElement => {
  const { register, handleSubmit, errors } = useForm();

  const labelClasses = 'block my-3';
  const inputClasses = 'block border border-gray-400 focus:outline-green p-1 text-sm w-full';
  const textareaClasses = 'block border border-gray-400 focus:outline-green h-20 p-1 resize-y text-sm w-full';
  const requiredFieldClasses = 'ml-0.5 text-red-800 text-xs';

  return (
    <form className={`bg-gray-100 border border-gray-200 max-w-xs p-5 text-font-color text-left ${className}`} onSubmit={handleSubmit(submitForm)}>
      <h4>Let&apos;s Get in Touch</h4>
      <hr />
      <label className={labelClasses} htmlFor='name'>
        Name
        <span className={requiredFieldClasses}>*</span>
        <input className={inputClasses} type='text' name='name' ref={register({ required: true })} />
        {errors.name && <RequiredFieldErrorMessage />}
      </label>
      <label className={labelClasses} htmlFor='emailAddress'>
        Email address
        <span className={requiredFieldClasses}>*</span>
        <input className={inputClasses} type='email' name='emailAddress' ref={register({ required: true })} />
        {errors.emailAddress && <RequiredFieldErrorMessage />}
      </label>
      <label className={labelClasses} htmlFor='message'>
        Message
        <span className={requiredFieldClasses}>*</span>
        <textarea className={textareaClasses} name='message' ref={register({ required: true })} />
        {errors.message && <RequiredFieldErrorMessage />}
      </label>
      <input className='bg-green border border-gray-400 cursor-pointer mt-3 w-full' type='submit' value='Submit' />
    </form>
  );
};

ContactForm.defaultProps = {
  className: null,
};

export default ContactForm;
