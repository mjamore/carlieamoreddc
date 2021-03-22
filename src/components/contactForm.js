import * as React from 'react';
import * as styles from './contactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label} for='name'>Name:
        <input className={styles.input} type='text' name='name' id='name'></input>
      </label>
      <label className={styles.label} for='emailAddress'>Email address:
        <input className={styles.input} type='email' name='emailAddress' id='emailAddress'></input>
      </label>
      <label className={styles.label} for='comments'>Comment:
        <textarea className={styles.textarea} name='comments' id='comments'></textarea>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default ContactForm;