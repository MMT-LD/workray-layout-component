import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, styles }) => (
  <header className={styles.header}>{children}</header>
);

Header.propTypes = {
  styles: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  styles: {},
};

export default Header;
