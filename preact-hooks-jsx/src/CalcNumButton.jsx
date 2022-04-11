import React from 'react'

export default class CalcNumButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // 常識的にこの書き方は動くけど間違えているはず
      <button className={["CalcNumButton", this.props.is_wide ? "is_2x" : null].join(' ')} {...this.props}>{this.props.label}</button>
    )
  }
}
