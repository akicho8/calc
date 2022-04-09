import React from 'react'
import CalcNumButton from "./CalcNumButton"
import CalcOpButton from "./CalcOpButton"
import CalcDarkButton from "./CalcDarkButton"
import CalcDisplay from "./CalcDisplay"

export default class CalcApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ax_r: 0,
      bx_r: null,
      cx_r: null,
      op_r: null,
    }
  }

  onNumberClickHandle = (plus_value) => {
    if (this.state.op_r == null) {
      this.setState(prev => ({ax_r: prev.ax_r * 10 + plus_value}))
    } else {
      this.setState(prev => ({bx_r: prev.bx_r * 10 + plus_value}))
    }
  }

  onZeroZeroClick = () => {
    this.onNumberClickHandle(0)
    this.onNumberClickHandle(0)
  }

  onClearHandle = () => {
    this.setState({bx_r: null})
  }

  onAllClearHandle = () => {
    this.setState({ax_r: 0})
    this.setState({bx_r: null})
    this.setState({cx_r: null})
    this.setState({op_r: null})
  }

  isClearHandle = () => {
    return this.state.bx_r != null
  }

  onSetOpHandle = (op_r) => {
    if (this.state.bx_r != null) {
      this.calcUpdate()
    }
    this.setState({op_r: op_r})
  }

  onEqualHandle = () => {
    if (false) {
      // 次のように書きたかったが bx_r を設定しても this.stata.bx_r は更新されない
      if (this.state.op_r != null) {
        if (this.state.bx_r == null) {
          this.setState({bx_r: this.state.ax_r})
        }
        this.calcUpdate()
      }
    } else {
      // しかたなくばらして実行
      // すでに使いにくくなっている
      if (this.state.op_r != null) {
        let rhv = this.state.bx_r ?? this.state.cx_r ?? this.state.ax_r
        const value = this.calcUpdate2(this.state.ax_r, rhv, this.state.op_r)
        this.setState({ax_r: value})
        this.setState({bx_r: null})
        this.setState({cx_r: rhv})
      }
    }
  }

  calcUpdate = () => {
    const value = this.calcUpdate2(this.state.ax_r, this.state.bx_r, this.state.op_r)
    this.setState({ax_r: value})
    this.setState({bx_r: null})
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
    if (this.state.bx_r != null) {
      this.setState({bx_r: -this.state.bx_r})
    } else if (this.state.ax_r != null) {
      this.setState({ax_r: -this.state.ax_r})
    }
  }

  onParcentage = () => {
    if (this.state.bx_r != null) {
      this.setState({bx_r: this.state.bx_r / 100})
    } else if (this.state.ax_r != null) {
      this.setState({ax_r: this.state.ax_r / 100})
    }
  }

  resultString = () => {
    let str = null
    if (this.state.bx_r != null) {
      str = this.state.bx_r
    } else if (this.state.ax_r != null) {
      str = this.state.ax_r
    }
    return str
  }

  render() {
    return (
      <div className="CalcApp">
        {/* <CalcDisplay> */}
        {/*   {(this.state.ax_r != null) && <span>{this.state.ax_r}</span>} */}
        {/*   {(this.state.op_r != null) && <span>{this.state.op_r}</span>} */}
        {/*   {(this.state.bx_r != null) && <span>{this.state.bx_r}</span>} */}
        {/* </CalcDisplay> */}

        {/* <CalcDisplay>{this.state.ax_r}, {this.state.op_r}, {this.state.bx_r} ({this.state.cx_r})</CalcDisplay> */}
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
