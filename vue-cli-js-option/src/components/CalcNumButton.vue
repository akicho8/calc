import React from 'react'

export default class CalcNumButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcNumButton" {...this.props}>{this.props.label}</button>
    )
  }
}
