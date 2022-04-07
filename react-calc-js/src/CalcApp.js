import React from 'react'
import CalcNumButton from "./CalcNumButton"
import CalcOpButton from "./CalcOpButton"
import CalcDarkButton from "./CalcDarkButton"
import CalcDisplay from "./CalcDisplay"

export default class CalcApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ax_value: 0,
      bx_value: null,
      op_value: null,
    }
  }

  onNumberClickHandle = (plus_value) => {
    if (this.state.op_value == null) {
      this.setState(prevState => ({ax_value: prevState.ax_value * 10 + plus_value}))
    } else {
      this.setState(prevState => ({bx_value: prevState.bx_value * 10 + plus_value}))
    }
  }

  onClearHandle = () => {
    this.setState({
      ax_value: 0,
      bx_value: null,
      op_value: null,
    })
  }

  onSetOpHandle = (op_value) => {
    if (op_value === "+" || op_value === "-" || true) {
      this.onEqualHandle()
      this.setState({op_value: op_value})
    }
  }

  onEqualHandle = () => {
    if (this.state.bx_value != null) {
      let value = null;
      if (false) {
      } else if (this.state.op_value === "+") {
        value = this.state.ax_value + this.state.bx_value
      } else if (this.state.op_value === "-") {
        value = this.state.ax_value - this.state.bx_value
      } else if (this.state.op_value === "*") {
        value = this.state.ax_value * this.state.bx_value
      } else if (this.state.op_value === "/") {
        value = this.state.ax_value / this.state.bx_value
      }
      value = Math.round(value * 1000000) / 1000000
      this.setState({ax_value: value, bx_value: null, op_value: null})
    }
  }

  render() {
    return (
      <div className="CalcApp">
        <CalcDisplay>
          {(this.state.ax_value != null) && <span>{this.state.ax_value}</span>}
          {(this.state.op_value != null) && <span>{this.state.op_value}</span>}
          {(this.state.bx_value != null) && <span>{this.state.bx_value}</span>}
        </CalcDisplay>

        <div className="CalcNumButtons">
          <CalcDarkButton label="C"  onClick={this.onClearHandle} />
          <CalcDarkButton label="±" onClick={() => this.onSetOpHandle("+")} />
          <CalcDarkButton label="%"  onClick={() => this.onSetOpHandle("%")} />
          <CalcOpButton label="÷" onClick={() => this.onSetOpHandle("/")} />
          <CalcNumButton label="7"  onClick={() => this.onNumberClickHandle(7)} />
          <CalcNumButton label="8"  onClick={() => this.onNumberClickHandle(8)} />
          <CalcNumButton label="9"  onClick={() => this.onNumberClickHandle(9)} />
          <CalcOpButton label="×" onClick={() => this.onSetOpHandle("*")} />
          <CalcNumButton label="4"  onClick={() => this.onNumberClickHandle(4)} />
          <CalcNumButton label="5"  onClick={() => this.onNumberClickHandle(5)} />
          <CalcNumButton label="6"  onClick={() => this.onNumberClickHandle(6)} />
          <CalcOpButton label="-"  onClick={() => this.onSetOpHandle("-")} />
          <CalcNumButton label="1"  onClick={() => this.onNumberClickHandle(1)} />
          <CalcNumButton label="2"  onClick={() => this.onNumberClickHandle(2)} />
          <CalcNumButton label="3"  onClick={() => this.onNumberClickHandle(3)} />
          <CalcOpButton label="+"  onClick={() => this.onSetOpHandle("+")} />
          <CalcNumButton label="0"  onClick={() => this.onNumberClickHandle(0)} className="CalcNumButton double_size" />
          <CalcOpButton label="="  onClick={this.onEqualHandle} className="CalcOpButton double_size" />
        </div>
      </div>
    )
  }
}
