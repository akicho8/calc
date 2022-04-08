import React from 'react'

interface Props {
  label: string
  onClick: () => void
  className?: string
}

export default class CalcNumButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcNumButton" {...this.props}>{this.props.label}</button>
    )
  }
}
