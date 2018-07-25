import React from 'react';

const Header = ({ children, styles }) => (
  <header className={styles.header}>{children}</header>
);

export default Header;
