import React from 'react'
import NumButton from "./NumButton"
import DisplayBlock from "./DisplayBlock"

export default class CalcApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acc_right: 0,
      acc_left: null,
      op_key: null,
    }
  }

  onNumberClickHandle = (plus_value) => {
    if (this.state.op_key == null) {
      this.setState(prevState => ({acc_left: prevState.acc_left * 10 + plus_value}))
    } else {
      this.setState(prevState => ({acc_right: prevState.acc_right * 10 + plus_value}))
    }
  }

  onClearHandle = (value) => {
    this.setState({
      acc_right: value,
      acc_left: null,
      op_key: null,
    })
  }

  onClearHandle = () => {
    this.setState({
      acc_left: 0,
      acc_right: null,
      op_key: null,
    })
  }

  onSetOpHandle = (op_key) => {
    if (op_key === "+" || op_key === "-") {
      this.onEqualHandle()
      this.setState({op_key: op_key})
    }
  }

  onEqualHandle = () => {
    if (this.state.acc_right == null) {
    } else {
      if (this.state.op_key === "+") {
        this.setState({acc_left: this.state.acc_left + this.state.acc_right, acc_right: null, op_key: null})
      } else if (this.state.op_key === "-") {
        this.setState({acc_left: this.state.acc_left - this.state.acc_right, acc_right: null, op_key: null})
      }
    }
  }

  render() {
    return (
      <div className="CalcApp">
        <DisplayBlock>
          {(this.state.acc_left != null) && <span>{this.state.acc_left}</span>}
          {(this.state.op_key != null) && <span>{this.state.op_key}</span>}
          {(this.state.acc_right != null) && <span>{this.state.acc_right}</span>}
        </DisplayBlock>

        <div>
          <NumButton label="7" onClick={() => this.onNumberClickHandle(7)} />
          <NumButton label="8" onClick={() => this.onNumberClickHandle(8)} />
          <NumButton label="9" onClick={() => this.onNumberClickHandle(9)} />
          <NumButton label="C" onClick={this.onClearHandle} />
        </div>

        <div>
          <NumButton label="4" onClick={() => this.onNumberClickHandle(4)} />
          <NumButton label="5" onClick={() => this.onNumberClickHandle(5)} />
          <NumButton label="6" onClick={() => this.onNumberClickHandle(6)} />
        </div>

        <div>
          <NumButton label="1" onClick={() => this.onNumberClickHandle(1)} />
          <NumButton label="2" onClick={() => this.onNumberClickHandle(2)} />
          <NumButton label="3" onClick={() => this.onNumberClickHandle(3)} />
        </div>

        <div>
          <NumButton label="0" onClick={() => this.onNumberClickHandle(0)} />
        </div>

        <div>
          <NumButton label="+" onClick={() => this.onSetOpHandle("+")} />
          <NumButton label="-" onClick={() => this.onSetOpHandle("-")} />
          <NumButton label="=" onClick={this.onEqualHandle} />
        </div>
      </div>
    )
  }
}
