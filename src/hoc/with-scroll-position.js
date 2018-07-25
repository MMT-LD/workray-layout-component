import React, { Component } from 'react';

const withScrollPosition = WrappedComponent => {
  class ScrollPosition extends Component {
    state = { scrollY: null, ticking: false };
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const { ticking } = this.state;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.setState((prevState, props) => ({
            scrollY: (prevState.scrollY = window.scrollY),
            ticking: false,
          }));
        });

        this.setState((prevState, props) => ({
          ticking: true,
        }));
      }
    };

    render() {
      return (
        <WrappedComponent
          scroll={{ scrollY: this.state.scrollY }}
          {...this.props}
        />
      );
    }
  }

  return ScrollPosition;
};

export default withScrollPosition;
