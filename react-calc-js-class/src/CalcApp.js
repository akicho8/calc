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
      cx_value: null,
      op_value: null,
    }
  }

  onNumberClickHandle = (plus_value) => {
    if (this.state.op_value == null) {
      this.setState(prev => ({ax_value: prev.ax_value * 10 + plus_value}))
    } else {
      this.setState(prev => ({bx_value: prev.bx_value * 10 + plus_value}))
    }
  }

  onZeroZeroClick = () => {
    this.onNumberClickHandle(0)
    this.onNumberClickHandle(0)
  }

  onClearHandle = () => {
    this.setState({bx_value: null})
  }

  onAllClearHandle = () => {
    this.setState({ax_value: 0})
    this.setState({bx_value: null})
    this.setState({cx_value: null})
    this.setState({op_value: null})
  }

  isClearHandle = () => {
    return this.state.bx_value != null
  }

  onSetOpHandle = (op_value) => {
    if (this.state.bx_value != null) {
      this.calcUpdate()
    }
    this.setState({op_value: op_value})
  }

  onEqualHandle = () => {
    if (false) {
      // 次のように書きたかったが bx_value を設定しても this.stata.bx_value は更新されない
      if (this.state.op_value != null) {
        if (this.state.bx_value == null) {
          this.setState({bx_value: this.state.ax_value})
        }
        this.calcUpdate()
      }
    } else {
      // しかたなくばらして実行
      // すでに使いにくくなっている
      if (this.state.op_value != null) {
        let rhv = this.state.bx_value ?? this.state.cx_value ?? this.state.ax_value
        const value = this.calcUpdate2(this.state.ax_value, rhv, this.state.op_value)
        this.setState({ax_value: value})
        this.setState({bx_value: null})
        this.setState({cx_value: rhv})
      }
    }
  }

  calcUpdate = () => {
    const value = this.calcUpdate2(this.state.ax_value, this.state.bx_value, this.state.op_value)
    this.setState({ax_value: value})
    this.setState({bx_value: null})
  }

  calcUpdate2 = (ax, bx, op) => {
    let value = null;
    if (false) {
    } else if (op === "+") {
      value = ax + bx
    } else if (op === "-") {
      value = ax - bx
    } else if (op === "*") {
      value = ax * bx
    } else if (op === "/") {
      value = ax / bx
    }
    return Math.trunc(value)
  }

  onSignToggle = () => {
    if (this.state.bx_value != null) {
      this.setState({bx_value: -this.state.bx_value})
    } else if (this.state.ax_value != null) {
      this.setState({ax_value: -this.state.ax_value})
    }
  }

  onParcentage = () => {
    if (this.state.bx_value != null) {
      this.setState({bx_value: this.state.bx_value / 100})
    } else if (this.state.ax_value != null) {
      this.setState({ax_value: this.state.ax_value / 100})
    }
  }

  resultString = () => {
    let str = null
    if (this.state.bx_value != null) {
      str = this.state.bx_value
    } else if (this.state.ax_value != null) {
      str = this.state.ax_value
    }
    return str
  }

  render() {
    return (
      <div className="CalcApp">
        {/* <CalcDisplay> */}
        {/*   {(this.state.ax_value != null) && <span>{this.state.ax_value}</span>} */}
        {/*   {(this.state.op_value != null) && <span>{this.state.op_value}</span>} */}
        {/*   {(this.state.bx_value != null) && <span>{this.state.bx_value}</span>} */}
        {/* </CalcDisplay> */}

        {/* <CalcDisplay>{this.state.ax_value}, {this.state.op_value}, {this.state.bx_value} ({this.state.cx_value})</CalcDisplay> */}
        <CalcDisplay>{this.resultString()}</CalcDisplay>

        <div className="CalcNumButtons">
          {this.isClearHandle()
           ? <CalcDarkButton label="C"  onClick={this.onClearHandle} />
           : <CalcDarkButton label="AC"  onClick={this.onAllClearHandle} />
          }
          <CalcDarkButton label="±" onClick={this.onSignToggle} />
          <CalcDarkButton label="％"  onClick={this.onParcentage} />
          <CalcOpButton   label="÷" onClick={() => this.onSetOpHandle("/")} />
          <CalcNumButton  label="7"  onClick={() => this.onNumberClickHandle(7)} />
          <CalcNumButton  label="8"  onClick={() => this.onNumberClickHandle(8)} />
          <CalcNumButton  label="9"  onClick={() => this.onNumberClickHandle(9)} />
          <CalcOpButton   label="×" onClick={() => this.onSetOpHandle("*")} />
          <CalcNumButton  label="4"  onClick={() => this.onNumberClickHandle(4)} />
          <CalcNumButton  label="5"  onClick={() => this.onNumberClickHandle(5)} />
          <CalcNumButton  label="6"  onClick={() => this.onNumberClickHandle(6)} />
          <CalcOpButton   label="-" onClick={() => this.onSetOpHandle("-")} />
          <CalcNumButton  label="1"  onClick={() => this.onNumberClickHandle(1)} />
          <CalcNumButton  label="2"  onClick={() => this.onNumberClickHandle(2)} />
          <CalcNumButton  label="3"  onClick={() => this.onNumberClickHandle(3)} />
          <CalcOpButton   label="+" onClick={() => this.onSetOpHandle("+")} />
          <CalcNumButton  label="0"  onClick={() => this.onNumberClickHandle(0)} className="CalcNumButton is_2x" />
          <CalcNumButton  label="00" onClick={this.onZeroZeroClick} />
          <CalcOpButton   label="="  onClick={this.onEqualHandle} />
        </div>
      </div>
    )
  }
}
