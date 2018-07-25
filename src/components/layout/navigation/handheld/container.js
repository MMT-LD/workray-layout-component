import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import flowRight from 'lodash.flowright';
import HandheldNavigation from './navigation';
import withScrollPosition from '../../../../hoc/with-scroll-position';

class HandheldNavigationContainer extends Component {
  state = {
    isFixed: false,
  };

  constructor(props) {
    super(props);
    this.menu = createRef();
  }

  componentDidUpdate(
    {
      scroll: { scrollY: prevScrollY },
    },
    { isFixed: prevIsFixed },
  ) {
    const {
      scroll: { scrollY },
    } = this.props;
    const { isFixed } = this.state;
    const { active } = this.props;

    if (scrollY === prevScrollY || active) return;

    if (prevScrollY > scrollY) return this.update(false);

    return this.update(true);
  }

  update(bool) {
    this.setState(prevState => ({
      isFixed: bool,
    }));
  }

  render() {
    const { isFixed } = this.state;
    const { styles, active, className } = this.props;
    return (
      <div
        ref={this.menu}
        className={classNames(className, {
          [`${styles.handheld}`]: true,
          [`${styles['is-active']}`]: isFixed,
          [`${styles['active']}`]: active,
        })}
      >
        <HandheldNavigation {...this.props} />
      </div>
    );
  }
}

HandheldNavigationContainer.propTypes = {
  styles: PropTypes.shape({}),
  scroll: PropTypes.shape({ scrollY }).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
};

HandheldNavigationContainer.defaultProps = {
  styles: {},
  className: '',
  active: false,
};

export default flowRight([withScrollPosition])(HandheldNavigationContainer);
