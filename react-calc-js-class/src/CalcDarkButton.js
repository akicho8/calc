import React from 'react'

export default class CalcDarkButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcDarkButton" {...this.props}>{this.props.label}</button>
    )
  }
}
