import React from 'react';
import classNames from 'classnames';

const SROnly = ({ children, modifier, className, styles, ...rest }) => (
  <span
    {...rest}
    className={classNames(className, {
      [styles['sr-only']]: true,
      [styles[modifier]]: modifier,
    })}
  >
    {children}
  </span>
);

export default SROnly;
