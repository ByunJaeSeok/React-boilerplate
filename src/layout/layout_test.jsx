import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class componentName extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    // title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
