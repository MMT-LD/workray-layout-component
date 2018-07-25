import React from 'react';

const Layout = ({ styles, children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
