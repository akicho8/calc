import React from 'react'

interface Props {
  label: string
  onClick: () => void
}

export default class CalcOpButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcOpButton" {...this.props}>{this.props.label}</button>
    )
  }
}
