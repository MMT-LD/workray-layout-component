import React from 'react';
import NavigationItem from './navigation-item';
import NavigationLogo from '../logo';
import SROnly from '../../../sr-only';
// import AccountInformation from '../account';

const Navigation = ({ children, trigger, items, styles, user }) => (
  <nav className={styles.navigation}>
    {console.log('reer', user)}
    <NavigationLogo
      src="https://www.workray.com/images/workray.svg"
      url="https://www.workray.com/en/dashboard"
      alt="Workray"
      shadow
      className={styles.logo}
    />
    {items && (
      <ul className={styles['reset-list']}>
        <NavigationItem styles={styles} className={styles.close}>
          <a href="#"
            className={`${styles.link}`}
            onClick={evt => trigger(evt)}
          >
            Menu
            <i className={styles['close-icon']}>
              <SROnly>Close</SROnly>
            </i>
          </a>
        </NavigationItem>
        {items.map(({ item, url, active }) => (
          <NavigationItem active={active} styles={styles} key={item}>
            <a href={url} className={styles.link}>
              {item}
            </a>
          </NavigationItem>
        ))}
      </ul>
    )}
    {/*user.data[0] && (
      <LinkElement
        url={'https://www.workray.com/en/dashboard/settings'}
        className={`${styles['link-account']} ${styles.link}`}
      >
        <AccountInformation user={user.data[0]} />
      </LinkElement>
    )*/}
  </nav>
);

export default Navigation;
