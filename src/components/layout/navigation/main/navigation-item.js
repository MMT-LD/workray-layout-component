import React from 'react';
import classNames from 'classnames';

const NavigationItem = ({ styles, className, active, children }) => {
  return (
    <li
      className={classNames(className, {
        [styles.item]: true,
        [styles.active]: active,
      })}
    >
      {children}
    </li>
  );
};

export default NavigationItem;
