import React from 'react'

export default class CalcDisplay extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div className="CalcDisplay" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
