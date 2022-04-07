import React from 'react'
import CalcNumButton from "./CalcNumButton"
import CalcOpButton from "./CalcOpButton"
import CalcDarkButton from "./CalcDarkButton"
import CalcDisplay from "./CalcDisplay"

interface State {
  ax_value: any
  bx_value: any
  cx_value: any
  op_value: any
}

export default class CalcApp extends React.Component<{}, State> {
  // constructor(props: any) {
  //   super(props)
  //   this.state: State = {
  //     ax_value: 0,
  //     bx_value: null,
  //     cx_value: null,
  //     op_value: null,
  //   }
  // }

  state: State = {
    ax_value: 0,
    bx_value: null,
    cx_value: null,
    op_value: null,
  }

  onNumberClickHandle = (plus_value: any) => {
    if (this.state.op_value == null) {
      this.setState(prevState => ({ax_value: prevState.ax_value * 10 + plus_value}))
    } else {
      this.setState(prevState => ({bx_value: prevState.bx_value * 10 + plus_value}))
    }
  }

  onZeroZeroClick = () => {
    this.onNumberClickHandle(0)
    this.onNumberClickHandle(0)
  }

  onClearHandle = () => {
    this.setState({
      bx_value: null,
    })
  }

  onAllClearHandle = () => {
    this.setState({
      ax_value: 0,
      bx_value: null,
      cx_value: null,
      op_value: null,
    })
  }

  isClearHandle = () => {
    return this.state.bx_value != null
  }

  onSetOpHandle = (op_value: any) => {
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
        let bx_value = this.state.bx_value ?? this.state.cx_value ?? this.state.ax_value
        const value = this.calcUpdate2(this.state.ax_value, bx_value, this.state.op_value)
        this.setState({ax_value: value, bx_value: null, cx_value: bx_value})
      }
    }
  }

  calcUpdate = () => {
    const value = this.calcUpdate2(this.state.ax_value, this.state.bx_value, this.state.op_value)
    this.setState({ax_value: value, bx_value: null})
  }

  calcUpdate2 = (ax: any, bx: any, op: any) => {
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
