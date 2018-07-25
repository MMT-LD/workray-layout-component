import React from 'react';

const Footer = ({ styles, link }) => (
  <footer className={styles.footer}>
    <p>
      Copyright &copy; 2018 Workray All rights reserved
      <a href={link}>Terms & Privacy</a>
    </p>
  </footer>
);

export default Footer;
