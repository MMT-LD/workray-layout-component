import React from 'react';

export default (Component, css) => {
  const WithStyles = props => <Component {...props} styles={css} />;

  return WithStyles;
};
