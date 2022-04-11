import React from 'react'

export default class CalcOpButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcOpButton" {...this.props}>{this.props.label}</button>
    )
  }
}
