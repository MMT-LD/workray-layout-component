import React, { Children, Component, cloneElement, createRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import { Navigation, HandheldNavigationContainer } from './navigation';

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
    const { children, styles, navigation, ...rest } = this.props;
    return (
      <div className={styles['container']}>
        <div
          className={classNames({
            [`${styles['grid-row']}`]: true,
            [`${styles['active']}`]: active,
          })}
        >
          <div className={styles['grid-col-item-1']}>
            <Header>
              <HandheldNavigationContainer
                active={active}
                trigger={this.toggle}
              />
              <Navigation items={navigation} trigger={this.toggle} {...rest} />
            </Header>
          </div>
          <div
            className={styles['grid-col-item-2']}
            onClick={evt => active && this.toggle(evt)}
          >
            <div>{children}</div>
            <Footer link="https://www.workray.com/en/terms" />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({}),
  navigation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Layout.defaultProps = {
  styles: {},
};

export default Layout;
