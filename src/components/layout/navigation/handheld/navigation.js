import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import NavigationLogo from '../logo';
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

HandheldNavigation.propTypes = {
  styles: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
  trigger: PropTypes.func,
};

HandheldNavigation.defaultProps = {
  styles: {},
  className: '',
  active: false,
  trigger: () => {},
};

export default HandheldNavigation;
