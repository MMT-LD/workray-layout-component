import React, { Children, Component, cloneElement, createRef } from 'react';
import classNames from 'classnames';
import Footer from './footer';

const navigation = [
  {
    item: 'Dashboard',
    active: false,
    url: 'https://www.workray.com/en/dashboard',
  },
  {
    item: 'Jobs',
    active: false,
    url: 'https://www.workray.com/en/dashboard/jobs',
  },
  {
    item: 'Applications',
    active: false,
    url: 'https://www.workray.com/en/dashboard/applications',
  },
  {
    item: 'Career Advice',
    active: true,
    url: 'https://www.workray.com/en/dashboard/careeradvice',
  },
  {
    item: 'Services',
    active: false,
    url: 'https://www.workray.com/en/dashboard/services',
  },
  {
    item: 'Activity',
    active: false,
    url: 'https://www.workray.com/en/dashboard/activity',
  },
];

class Layout extends Component {
  state = {
    active: false,
  };

  toggle = evt => {
    evt.preventDefault();
    this.setState((prevState, props) => ({
      active: !prevState.active,
    }));
  };

  render() {
    const { active } = this.state;
    const { children, styles, ...rest } = this.props;
    return (
      <div className={styles['container']}>
        <div
          className={classNames({
            [`${styles['grid-row']}`]: true,
            [`${styles['active']}`]: active,
          })}
        >
          <div className={styles['grid-col-item-1']}>
            <p>sdsdsd</p>
          </div>
          <div
            className={styles['grid-col-item-2']}
            onClick={evt => active && this.toggle(evt)}
            ref={this.scrollContainer}
          >
            <div>{children}</div>
            <Footer link="https://www.workray.com/en/terms" />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
