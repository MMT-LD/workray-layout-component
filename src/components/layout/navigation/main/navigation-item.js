import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
};

NavigationItem.defaultProps = {
  styles: {},
  className: '',
  active: false,
};

export default NavigationItem;
