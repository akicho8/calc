// こう書けない？
// export default (props) => {
//   return (
//     <div className="CalcDisplay" {...this.props}>
//       {this.props.children}
//     </div>
//   )
// }

import React from 'react'

export default class CalcDisplay extends React.Component {
  constructor(props) {
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
