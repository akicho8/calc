import React from 'react'

interface Props {
  label: string
  onClick: () => void
}

export default class CalcDarkButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <button className="CalcDarkButton" {...this.props}>{this.props.label}</button>
    )
  }
}
