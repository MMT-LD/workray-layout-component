import React from 'react';
import classNames from 'classnames';

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

export default NavigationLogo;
