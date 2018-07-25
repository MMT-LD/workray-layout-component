import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HandheldNavigation from './navigation';
import withScrollPosition from '../../../../hoc/with-scroll-position';
import flowRight from 'lodash.flowright';

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

    if (scrollY === prevScrollY || this.props.active) return;

    if (prevScrollY > scrollY) return this.update(false);

    return this.update(true);
  }

  update(bool) {
    this.setState(prevState => ({
      isFixed: bool,
    }));
  }

  render() {
    return (
      <div
        ref={this.menu}
        className={classNames(this.props.className, {
          [`${this.props.styles.handheld}`]: true,
          [`${this.props.styles['is-active']}`]: this.state.isFixed,
          [`${this.props.styles['active']}`]: this.props.active,
        })}
      >
        <HandheldNavigation {...this.props} />
      </div>
    );
  }
}

export default flowRight([withScrollPosition])(HandheldNavigationContainer);
