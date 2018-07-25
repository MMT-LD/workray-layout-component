import React from 'react';
import Avatar from 'components/avatar';
import { GridRow, GridCell } from 'components/grid';

const AccountInformation = ({ styles, user }) => {
  return (
    <div className={styles.account}>
      <GridRow
        breakpoints={[{ m: 'x-left' }, { m: 'y-middle' }]}
        style={{ padding: '1rem 1rem 1.5rem' }}
        modifier="equal"
      >
        <GridCell breakpoints={[{ m: 'span-6' }]} className={styles.reset}>
          <Avatar src={user.picture.large || ''} size="small" />
        </GridCell>
        <GridCell breakpoints={[{ m: 'span-10' }]}>
          <p className={styles['account-name']}>
            {user.name.first} {user.name.last}
          </p>
          <span className={styles.unlink}>Settings</span>
        </GridCell>
      </GridRow>
    </div>
  );
};

export default AccountInformation;
