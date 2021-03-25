import * as React from 'react';
import FooterNavigation from './footerNavigation';
import ContactForm from '../contactForm';
import { footer, socialMediaLinks, copyrightStatement } from './footer.module.css';

const Footer = () => (
  <footer className={footer}>
    <FooterNavigation />
    <div className={socialMediaLinks}>
      <a href='https://www.facebook.com/carlie.amore' target='_blank' rel='noreferrer' aria-label="Facebook link to Carlie Amore\'s profile page">
        <i className='fa fa-facebook' />
      </a>
      <a href='https://twitter.com/hopinmycarl' target='_blank' rel='noreferrer' aria-label="Twitter link to Carlie Amore\'s profile page">
        <i className='fa fa-twitter' />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label="Instagram link to Carlie Amore\'s profile page">
        <i className='fa fa-instagram' />
      </a>
      <a href='https://www.snapchat.com/' target='_blank' rel='noreferrer' aria-label="Snapchat link to Carlie Amore\'s profile page">
        <i className='fa fa-snapchat' />
      </a>
      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' aria-label="LinkedIn link to Carlie Amore\'s profile page">
        <i className='fa fa-linkedin' />
      </a>
      <p className={copyrightStatement}>© 2021 Carlie Amore, DDS | All Rights Reserved.</p>
    </div>
    <ContactForm />
  </footer>
);

export default Footer;
