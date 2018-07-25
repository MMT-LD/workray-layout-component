import React from 'react';
import NavigationLogo from '../logo';
import classNames from 'classnames';
import SROnly from '../../../sr-only';

const HandheldNavigation = ({
  styles,
  className,
  active,
  trigger,
  ...rest
}) => (
  <nav
    className={classNames(className, {
      [`${styles.navigation}`]: true,
    })}
    onClick={evt => trigger(evt)}
  >
    <a href="#" className={styles.menu}>
      <SROnly modifier="unclip">Close/open menu</SROnly>
    </a>
    <NavigationLogo
      src="https://www.workray.com/images/workray.svg"
      url="https://www.workray.com/en/dashboard"
      alt="Workray"
      className={styles.logo}
    />
  </nav>
);

export default HandheldNavigation;
