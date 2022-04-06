import React from 'react'

export default class DisplayBlock extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="DisplayBlock" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
