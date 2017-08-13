import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './style';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChange(event) {
    const { onChange } = this.props;
    const { value } = event.target;

    onChange(value);
    this.setState({ value });
  }

  render() {
    const { type, placeholder, value } = this.props;
    const state = this.state;

    return (
      <div className={'input-wrapper'}>
        <input
          type={type}
          value={value || state.value}
          placeholder={placeholder}
          onChange={(val) => this.onChange(val)}
          className={'input'}
        />
      </div>
    );
  }
}

export default Input;
