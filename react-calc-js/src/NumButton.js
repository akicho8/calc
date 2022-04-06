import React from 'react'

export default class NumButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button className="NumButton" {...this.props}>{this.props.label}</button>
    )
  }
}
