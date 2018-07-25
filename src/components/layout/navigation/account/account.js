import React from 'react';
import PropTypes from 'prop-types';

const AccountInformation = ({ styles, user }) => {
  return (
    <div className={styles.account}>
      <div>
        <img src={user.picture.large || ''} />
        <div>
          <p className={styles['account-name']}>
            {user.name.first} {user.name.last}
          </p>
          <span className={styles.unlink}>Settings</span>
        </div>
      </div>
    </div>
  );
};

AccountInformation.propTypes = {
  styles: PropTypes.shape({}),
  user: PropTypes.shape({}).isRequired,
};

AccountInformation.defaultProps = {
  styles: {},
};


export default AccountInformation;
