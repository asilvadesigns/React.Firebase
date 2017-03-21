import React, { Component, PropTypes } from 'react';

const HEADING = [
  1,
  2,
  3,
  4,
  5,
  6
];

const FontSize = (size, unit) => {
  return size + unit;
};

class Heading extends Component {
  render() {
    const Tag = `h${this.props.level}`;
    const Size = this.props.size ? this.props.size : this.props.level;
    const Style = {
      fontSize: FontSize(HEADING[5], "px")
    }

    return (
      <Tag style={Style}>
        {this.props.children}
      </Tag>
    )
  }
}

Heading.defaultProps = {
  level: 5,
  children: 'heading default text'
}

Heading.propTypes = {
  size: PropTypes.oneOf(HEADING),
  level: PropTypes.oneOf(HEADING).isRequired,
  children: PropTypes.string
}

export default Heading;
