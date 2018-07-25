import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const NavigationLogo = ({ url, src, alt, styles, shadow, className }) => (
  <a
    href={url}
    className={classNames(className, {
      [`${styles['logo-link']}`]: true,
      [`${styles['with-shadow']}`]: shadow,
    })}
  >
    <img src={src} alt={alt} className={styles['logo-image']} />
  </a>
);

NavigationLogo.propTypes = {
  styles: PropTypes.shape({}),
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
};

NavigationLogo.defaultProps = {
  styles: {},
  className: '',
  shadow: false,
};

export default NavigationLogo;
